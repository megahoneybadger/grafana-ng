run-clean: cleanup restore build run 

all : cleanup restore build

cleanup:
	dotnet clean web/ed.web.csproj

restore:
	dotnet restore web/ed.web.csproj
	
build:
	dotnet build web/ed.web.csproj

run:
	dotnet bin/netcoreapp3.1/ed.web.dll --homepath .
