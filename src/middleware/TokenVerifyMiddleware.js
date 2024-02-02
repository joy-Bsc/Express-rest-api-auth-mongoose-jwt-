const jwt = require('jsonwebtoken')
module.exports=(req,res,next)=>{

    

        let Token = req.headers['token-key']
        jwt.verify(Token,"SecretKey123",function(e,decoded){
         if(e){
             res.status(401).json({status:"invalid token",data:e})
             }
             else{
                next();
             }
        })
        res.send(Token)
     
}