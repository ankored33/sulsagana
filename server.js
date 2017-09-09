var http = require('http'),
    fs = require('fs');
var server = http.createServer();
var msg;
server.on('request', function(req, res){
    res.writeHead(200, {'Content-Type': 'html/plain'});
    fs.readFile(__dirname + '/public_html/aa.html', 'utf-8', function(err, data) {
        if (err){
            res.writeHead(404, {'Content-Type': 'text/plain'});           
            res.write('not found');
            return res.end;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});           
        res.write(data);
        return res.end;
    });
    
});


server.listen(process.env.PORT);

console.log('Server is running.');