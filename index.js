const app = require("./app");
const dotenv =require('dotenv');
dotenv.config();

app.listen(process.env.RUNNING_PORT,function(){
    console.log("success from "+process.env.RUNNING_PORT);
});