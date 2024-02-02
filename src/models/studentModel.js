const mongoose=require('mongoose')


const DataSchema = mongoose.Schema({
    name:String,
    Roll:String,
    address:String,
    remarks:String,
    Mobile:{
        type:String,
        validate:{
            validator:function(value) {
                if(value.length===11){
                    return true;
                }
                else{
                    return false;
                }
            },
            message:"11 digit number required"
        }
    }
})

const studentModel = mongoose.model('students',DataSchema);
module.exports = studentModel;