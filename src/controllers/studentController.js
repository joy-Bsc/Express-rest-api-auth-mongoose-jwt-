const studentModel = require('../models/studentModel')


//CRUD
//create
exports.InsertStudent= async (req,res)=>{

    try{
        let reqBody=req.body;
        console.log(reqBody)

        const data = await studentModel.create(reqBody)
        if(data){
            res.status(201).json({status:"success",data:data})
    
        }
        else{
            res.status(400).json({status:"fail",data:error})
    
        }
    }
catch(e){
    console.log(e);
}
    

}

//read

exports.ReadStudent=(req,res)=>{

    let Query={};
    let Projection="name Roll remarks"
    studentModel.find(Query,Projection,(error,data)=>{
         if(error){
            res.status(400).json({status:"fail",data:error})
         }
         else{
            res.status(201).json({status:"success",data:data})
         }
    })
}

//U=update
// exports.UpdateStudents=async(req,res)=>{
//     try {
//         let id =req.params.id;
//     let QUERY={_id:id}
//     let reqBody = req.body;

//    const data= studentModel.updateOne(QUERY,reqBody)
//         if(data){
//             res.status(200).json({status:"success",data:data})
//         }
//         else{
//             res.status(200).json({status:"success",data:data})
//         }
//     }
//      catch (error) {
//         console.log(error);
        
//     }
// }
exports.UpdateStudents = async (req, res) => {
    try {
      const id = req.params.id;
      const QUERY = { _id: id };
      const reqBody = req.body;
  
      const result = await studentModel.updateOne(QUERY, reqBody);
      if (result) {
        res.status(200).json({ status: "success", data: result });
      } else {
        res.status(404).json({ status: "error", message: "Record not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", message: "Internal server error" });
    }
  };
  