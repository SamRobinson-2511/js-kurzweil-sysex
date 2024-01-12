const httpInstance = require('http');
const httpStatusInstance = require('http-status-codes');
const fsInstance = require('fs');
const portNumber = 5500; 


//create a server instance
const httpServer = httpInstance.createServer((req, res) => {
  if(req.url === '/login'){
    //write an html response to client
    res.writeHead(httpStatusInstance.StatusCodes.OK, {
      "Content-Type": "text/html"
    });
    readFile(redirectToHtml(`/login`), res);
  } else if (req.url === '/home'){
    //write an html response to client
    res.writeHead(httpStatusInstance.StatusCodes.OK, {
      "Content-Type": "text/html"
    });
    readFile(redirectToHtml(`/home`), res);
  } else {
    ///write an html response to the client 
    res.writeHead(httpStatusInstance.StatusCodes.OK, {
      "Content-Type": "text/html"
    });
    readFile(redirectToHtml(`index`), res)
  } 


  
  
  //write a response to the client 
  res.write('Response from Server')
  res.statusCode = 200;

  //end the response
  res.end();
})

//setup the server to listen on port 8080
httpServer.listen(portNumber, () => {
  console.log('Server is listening on ' + portNumber)
});

