FROM  mcr.microsoft.com/dotnet/sdk:5.0 AS backend-build

# build backend
WORKDIR /src

COPY ["src/server/web/ed.web.csproj", "web/"]
COPY ["src/server/web/Properties/defaults.ini", "conf/defaults.ini"]
COPY ["src/server/dal/ed.data.csproj", "dal/"]
COPY ["src/server/domain/ed.domain.csproj", "domain/"]

COPY ["src/server/data-sources/influxdb/driver/ed.influxdb.driver.csproj", "data-sources/influxdb/driver/"]
COPY ["src/server/data-sources/influxdb/datasource/ed.influxdb.datasource.csproj", "data-sources/influxdb/datasource/"]

COPY ["src/server/data-sources/redis/driver/ed.redis.driver.csproj", "data-sources/redis/driver/"]
COPY ["src/server/data-sources/redis/datasource/ed.redis.datasource.csproj", "data-sources/redis/datasource/"]

RUN dotnet restore "web/ed.web.csproj"
RUN dotnet restore "data-sources/influxdb/datasource/ed.influxdb.datasource.csproj"
RUN dotnet restore "data-sources/redis/datasource/ed.redis.datasource.csproj"

COPY src/server . 
WORKDIR "/src/web"
RUN dotnet publish -c Release "ed.web.csproj"  -o /app/bin

WORKDIR "/src/data-sources/redis/datasource"
RUN dotnet publish -c Release "ed.redis.datasource.csproj"  -o /app/bin

WORKDIR "/src/data-sources/influxdb/datasource"
RUN dotnet publish -c Release "ed.influxdb.datasource.csproj"  -o /app/bin

# build client
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_14.x | bash \
    && apt-get install nodejs -yq

WORKDIR "/src/client"

COPY ./src/client/package.json ./
RUN npm install

COPY ./src/client  ./
RUN npm run build-common
RUN npm run build-uilib
RUN npm run build-influx
RUN npm run build-redis
RUN npm run build-chart
RUN npm run build-browser
RUN npm run build-text
RUN npm run build-svg
RUN npm run build-singlestat
RUN npm run build-grid
RUN npm run build

RUN cp -R /src/client/dist/app /app/client

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app

#https://github.com/puppeteer/puppeteer/issues/807
RUN apt-get update
RUN apt-get install -y wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libgbm-dev libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget

COPY --from=backend-build /app/bin  /bin
COPY --from=backend-build /app/client /client

COPY ["src/server/web/Properties/defaults.ini", "/conf/defaults.ini"]

WORKDIR "/bin"
ENTRYPOINT ["dotnet", "ed.web.dll", "--homepath", ".."]
