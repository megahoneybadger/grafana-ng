src = ./src
server = $(src)/server
client = $(src)/client

server-cleanup: 
	$(MAKE) -C  $(server) cleanup
	
server-restore: 
	$(MAKE) -C  $(server) restore
	
server-build: 
	$(MAKE) -C  $(server) build
	
		
client-cleanup: 
	$(MAKE) -C  $(client) cleanup
	
client-restore: 
	$(MAKE) -C  $(client) restore
	
client-build: 
	$(MAKE) -C  $(client) build
		
	
run: 
	dotnet bin/netcoreapp3.1/ed.web.dll --homepath .

