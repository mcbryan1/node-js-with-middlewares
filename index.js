//Setting Up Express
const express = require("express");
const server = express();

//Request Handling
const handleAllRequest = (req, res) => {
  console.log("Someone requested for profile page");
  res.send("<h1>This is My profile Page</h1>");
};

//Adding Middlewares
const middlewareFunction = () =>{
  console.log("middlewareFunction")
}


//Server Methods
server.use(middlewareFunction)
server.get('/profile', handleAllRequest);

//Listening To Server
server.listen(3000, () => console.log("Server Is Ready For Any Request"));
