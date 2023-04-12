const express = require("express")
const multer = require("multer")
const app = express()


 const dataUpload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"../upload")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+ Date.now()+".pdf")
        }
    })
 })

 app.post("/fileupload",dataUpload.single("file"),(req,res)=>{
    res.send("data send")
}) 
app.listen(8000,(req,res)=>{
    console.log("server is running on port 8000");
})


