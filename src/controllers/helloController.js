exports.HelloGet =(req,res)=>{
    res.status(200).json({status:"success",data:"hello this is my first get express rest api"})
}

exports.HelloPost =(req,res)=>{
    res.status(201).json({status:"success",data:"hello this is my first post express rest api"})
}
