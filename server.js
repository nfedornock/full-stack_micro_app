const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const{method, url} = req;

    res.statusCode = 200;

    res.setHeader('Content-type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    //no CORS error
    
    /** 
    if(url === '/getcat' && method ==='GET'){
        res.write(`Here's a cat.`);
        res.end();
    }
    else if(url === '/getdog'){
        res.write(`Here's a dog.`);
        res.end();
    }
    else{
        res.write('I do not recognize that request');
        res.end();
    }
    */
    res.write(`Hello from Node.js!`);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
});
