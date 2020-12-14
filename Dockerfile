#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS backend-build

RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq

COPY ["src/server/web/Properties/defaults.ini", "app/conf/defaults.ini"]

# build client 
WORKDIR "/src/client"

COPY ./src/client/package.json ./
RUN npm install

COPY ./src/client  ./
RUN npm run build-common
RUN npm run build-uilib
RUN npm run build-influx
RUN npm run build-chart
RUN npm run build 

RUN cp -R /src/client/dist/app /app/client

# build backend 
WORKDIR /src

COPY ["src/server/web/ed.web.csproj", "web/"]
COPY ["src/server/web/Properties/defaults.ini", "conf/defaults.ini"]
COPY ["src/server/dal/ed.data.csproj", "dal/"]
COPY ["src/server/domain/ed.domain.csproj", "domain/"]
COPY ["src/server/drivers/influx/ed.drivers.influx.csproj", "drivers/influx/"]
RUN dotnet restore "web/ed.web.csproj"
COPY src/server . 
WORKDIR "/src/web"
RUN dotnet publish -c Release "ed.web.csproj"  -o /app/bin

WORKDIR "/app/bin"
ENTRYPOINT ["dotnet", "ed.web.dll", "--homepath", ".."]
