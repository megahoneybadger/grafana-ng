

## General
This project is an amateur attempt to build  Grafana on .net core + angular.

### How to use
Firstly get the sources:

    git clone https://github.com/megahoneybadger/grafana-ng.git
    cd grafana-ng

Secondly build server and client (you will need .net core for server and npm for client):

    make build
    
And finally:

    make run

It must start up the server listening on localhost:5000;



### Changes

# 1.3.0 (2021-08-18)
- Add grid panel
- Add dashboard import/export

# 1.2.1 (2021-07-19)
- Add sparkline into singlestat panel

# 1.2.0 (2021-07-16)
- Add svg panel
- Add singlestat panel
- Add redis datasource

# 1.0.1 (2021-03-22)
- Add text panel
- Add browser panel

# 1.0.0 (2021-01-26)
First public release
