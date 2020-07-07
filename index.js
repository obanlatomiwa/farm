const fs = require('fs');

const input = fs.readFileSync('./txt/input.txt', 'utf-8');

const textOut = `created file on ${Date.now()} \n  ${input}`;
fs.writeFileSync('./txt/output.txt', textOut); 
fs.writeFileSync('./txt/output1.txt', textOut); 


console.log(input);