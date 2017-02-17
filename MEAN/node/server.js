/*

1) setup static pages to be loaded when a url request is made to our server
2) setup server file (server.js) where your JS code will live
3) buold Node server that will serve the pages
    1. require dependencies: (useful modules that come with node)
        - "fs" - looks into file system, reads files, provides them to browser
        - "http" - listens for http requests
    2. create and run server to test if everything's working so far
    3. Figure out which file server is looking for when hit with an http request
    4. Read file, send response back. Send error back if file not found

*/

// pull dependencies, store into variables
var fs = require('fs'),
    http = require('http'),
    port = 1000

var server = http.createServer(function(request, response){  // pull in http functionality, invoke createServer method on it
    // we can take a look at any request being made to the server
    // and we can expect the server to give back a response when hit with any route

    // response.write('hi');
    // response.end();

    console.log("Client requested for this url", request.url);

    if(request.url === '/'){
        fs.readFile('static/greetings.html', 'utf8', function(errors, contents){
            // Using callback function, either respond with error, or contents to be displayed
            if(errors){
                console.log(errors);
            }
            response.writeHead(200, {'Content-type': 'text/html'} ); // response header 200 along with content type if file found
            response.write(contents); // display content onto the body
            response.end();
        })
    }else if(request.url === '/supdude'){
        fs.readFile('static/suh_duu.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'} );
            response.write(contents);
            response.end();
        })
    }else{
        response.writeHead(404);
        response.end('File not found!!!');
    }

});

server.listen(port, function(){
    console.log("Running on port: ", port);
}); // run listen on the server object created, passing in port you want it to listen to
// you can include optional parameter that will run if server is actually listening
