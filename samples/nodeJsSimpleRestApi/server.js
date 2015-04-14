var http = require('http');
var qs = require('querystring');
var url = require('url');
var dirty = require('dirty');
var fs = require('fs');

var db = dirty('users.db');
var counter = 0;

function startServer() {
    var port = process.env.port || 1337;
    
    http.createServer(function (req, res) {
        var requestData = '';
        var pathName = url.parse(req.url).pathname;
        
        if (req.method === "GET") {
            
            if (pathName == '/index' || pathName == '/') {
                res.writeHead(200, { 'Content-Type': 'text/html', 'Access-Control-Allow-Origin': '*' });
                res.end('Simple REST api');
            }
            if (pathName == '/users') {
                res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
                var users = [];
                db.forEach(function (k, v) {
                    users.push(v);
                });
                res.end(JSON.stringify(users));
            }

        } else if (req.method === "POST") {
            
            req.on('data', function (data) {
                requestData += data;
            });
            
            req.on('end', function () {
                var postUserData = qs.parse(requestData);
				console.log(postUserData);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                
                if (pathName === "/user") {
					++counter;
                    db.set(counter, { firstName: postUserData.firstName, lastName: postUserData.lastName });
                    res.end(counter + ": " + postUserData.firstName + " " + postUserData.lastName);
                }
            });

        }
    }).listen(port);
}

exports.startServer = startServer;