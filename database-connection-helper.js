// this file is just for future reference.

/*
steps to connections:

1. Create a MongoDB Database
2. Create user for it
3. create a .env file to save the credentials privately
4. create a config file to connect with mongodb
5. copy connection url from mongodb, replace the user and password with env variables and put it into the config file
6. install mongodb and mongoose using npm
7. use this lines of code to connnect:




// mongoose config
var mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// get the url
var dbURL = require("./config").DB_URL;

// connection
mongoose.connect(dbURL);

// check connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});



done.






*/
