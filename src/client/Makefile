restore: 
	npm install
	
build:
	npm run build-common
	npm run build-uilib
	npm run build-influx
	npm run build-redis
	npm run build-chart
	npm run build-browser
	npm run build-text
	npm run build-svg
	npm run build-singlestat

	npm run build 
	
test: 
	npm run test -- --no-watch --no-progress  --browsers=ChromeHeadlessCI

