const express = require("express")
const multer = require("multer")
const app = express()


 const dataUpload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"../upload")               // where we want our file to be
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+ Date.now()+".jpg")  // giving format "jpg" for us to look the uploaded file in jpg format we can change it as per need
        }
    })
 })

 app.post("/fileupload",dataUpload.single("file"),(req,res)=>{   // for uploading multiple file use array in place of single
    res.send("data send")
}) 
app.listen(8000,(req,res)=>{
    console.log("server is running on port 8000");
})


