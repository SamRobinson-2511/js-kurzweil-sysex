const httpInstance = require('http');
const httpStatusInstance = require('http-status-codes');
const fsInstance = require('fs');
const portNumber = 5500; 

const httpServer = httpInstance.createServer((req, res)=>{
  if (req.url === '/login') {
    res.writeHead(httpStatusInstance.StatusCodes.OK, {
      "Content-Type": "text/html"
    });
    readFile(redirectToHtml(`pages/login`), res);
  } else if (req.url === '/about') {
    res.writeHead(httpStatusInstance.StatusCodes.OK, {
      "Content-Type": "text/html"
    });
  } 
});
