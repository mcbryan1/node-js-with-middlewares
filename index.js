//Setting Up Express
const express = require("express");
const server = express();

//Request Handling
const handleAllRequest = (req, res) => {
  console.log("Someone requested for profile page");
  res.send("<h1>This is My profile Page</h1>");
};
const handleProfileRequest = (req, res) => {
  console.log("Someone requested for profile page");
  res.send("This is My profile Page");
};


//Adding Middleware 
const middlewareFunction = (req, res, next) =>{
  console.log("middlewareFunction")
  next();
}

//Adding Specific Middleware
const profileMiddlewareFunction = (req, res, next) =>{
  console.log("Specific profile middleware Function executed")
  next();
}

//Server Methods (General Middleware First before any other route )
server.use(middlewareFunction)
server.get('/profile', profileMiddlewareFunction, handleAllRequest);
server.post('/profile', handleProfileRequest);




//Listening To Server
server.listen(3000, () => console.log("Server Is Ready For Any Request"));
