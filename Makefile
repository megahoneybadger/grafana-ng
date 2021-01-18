src = ./src
server = $(src)/server
client = $(src)/client

server-cleanup: 
	$(MAKE) -C  $(server) cleanup
	
server-restore: 
	$(MAKE) -C  $(server) restore
	
server-build: 
	$(MAKE) -C  $(server) build
	
server-rebuild: 
	$(MAKE) -C  $(server) rebuild
	
server-test: 
	dotnet test bin/tests/ed.tests.dll -v n
	
		
client-cleanup: 
	$(MAKE) -C  $(client) cleanup
	
client-restore: 
	$(MAKE) -C  $(client) restore
	
client-build: 
	$(MAKE) -C  $(client) build
	
client-test: 
	$(MAKE) -C  $(client) test
	
test: server-test client-test
		
build: server-cleanup server-restore server-build client-restore client-build
	
run: 
	dotnet bin/ed.web.dll --homepath .

