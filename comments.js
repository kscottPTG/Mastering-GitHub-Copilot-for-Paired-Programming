// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];

http.createServer(function(req, res) {
    // parse URL
    var url_parts = url.parse(req.url);
    if(url_parts.pathname == '/') {
        switch(req.method) {
            case 'GET':
                show(res);
                break;
            case 'POST':
                insert(req, res);
                break;
            default:
                break;
        }
    } else {
        notfound(res);
    }
}).listen(1337, '