const fs = require('fs');
const http = require('http');
const url = require('url');


// server

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const productObj = JSON.parse(data);


const server = http.createServer((req, res) => {
    const pathName = req.url;
    if(pathName === '/'  || pathName === '/overview'){
        res.end('this is the overview page')
    }else if(pathName === '/product'){
        res.end('this is the product page')
    }else if(pathName === '/api'){
        res.writeHead(200, {
            'Content-type': 'application/json',
        })
        res.end(data);
    }else {
        res.writeHead(404, {
            'Content-type': 'text/html',
        })
        res.end('<h1>page not found</h1>')
    }
})

server.listen(8000, '127.0.0.1');

 
