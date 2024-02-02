const express=require('express');
const router = require('./src/routes/api');
const app = new express();

//security middle ware import
const rateLimit = require('express-rate-limit')
const mongoSanitize = require('express-mongo-sanitize')
const helmet = require('helmet')
const hpp = require('hpp')
const cors = require('cors')
const mongoose=require('mongoose')
const jwt = require('jsonwebtoken')

//security middleware implementation

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
//request rate limiting
const limiter = rateLimit({
    windowMs: 15*60*1000,   //15 minutes
    max:100     //limit each ip to 100 request per windows
});
app.use(limiter);

//mongodb database connection


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/School');
  console.log("connected successfully");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



app.use('/api/v1',router);



//undefined route

app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not found"})
})

module.exports = app;