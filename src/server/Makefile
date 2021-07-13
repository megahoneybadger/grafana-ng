cleanup:
	dotnet clean web/ed.web.csproj

restore:
	dotnet restore web/ed.web.csproj
	
build:
	dotnet build web/ed.web.csproj
	dotnet build tests/ed.tests.csproj
	
rebuild: cleanup restore build

run-clean: rebuild run 
