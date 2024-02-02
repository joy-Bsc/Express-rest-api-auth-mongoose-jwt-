const express=require('express');
const helloController = require('../controllers/helloController');
const studentController = require('../controllers/studentController');
const JWTPractice = require('../controllers/JWTPractice')
const TokenIssueController = require('../controllers/TokenIssueController')
const TokenVerifyMiddleware = require('../middleware/TokenVerifyMiddleware')

const router=express.Router()

//this is my first get routing
router.get("/hello-get",helloController.HelloGet);
router.post("/hello-post",helloController.HelloPost);


//mongoose
router.get("/TokenIssue",TokenIssueController.TokenIssue)
router.post("/insertStudent",TokenVerifyMiddleware,studentController.InsertStudent);
router.get("/readStudent",TokenVerifyMiddleware,studentController.ReadStudent);
router.post("/updateStudent/:id",TokenVerifyMiddleware,studentController.UpdateStudents);


//jwt token
router.get("/CreateToken",JWTPractice.CreateToken);
router.get("/DecodeToken",JWTPractice.DecodeToken);
module.exports=router;