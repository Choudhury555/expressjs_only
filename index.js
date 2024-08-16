const express = require("express");
const bodyParser = require("body-parser");
const router = require("./UserRoutes");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(router);


app.listen(2000,()=>{
    console.log("Server is working");
})

//REST (Representational State Transfer) is an API that defines a set of functions that programmers can use 
// to send requests and receive responses using the HTTP protocol methods such as GET and POST.
