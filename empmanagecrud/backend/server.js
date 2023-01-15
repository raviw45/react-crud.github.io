const bodyParser = require('body-parser');
const express=require('express');
const server=express();
const cors=require('cors');
const empRouter=require('./routes/empRouter');
const userRouter=require('./routes/login');
const port=7890;
const localhost='127.0.0.1';
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));
server.use(cors());

server.use("/",empRouter);
server.use("/login",userRouter);

server.listen(port,localhost,(err)=>{
    if(err)  console.log("Error:::",err);
    else  console.log(`server is running at ${localhost} on the port ${port}`);
});

