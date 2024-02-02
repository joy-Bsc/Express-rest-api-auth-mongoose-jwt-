const jwt = require('jsonwebtoken');

exports.CreateToken=(req,res)=>{

    let Payload={
        exp:Math.floor(Date.now()/1000)+(60 * 60),
        data:{Name:"Joy Dhar",City:"Naogaon",admin:true}
    }

    let Token= jwt.sign(Payload,"SecretKey123");
    res.send(Token)
}

exports.DecodeToken=(req,res)=>{

   var Token = req.headers['token-key']
   jwt.verify(Token,"SecretKey123",function(e,decoded){
    if(e){
        res.status(401).json({status:"invalid token",data:e})
        }
        else{
            res.status(200).json({status:"success",data:decoded})
        }
   })
   res.send(Token)
}