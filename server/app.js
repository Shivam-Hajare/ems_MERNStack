const express = require("express")
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());

app.use(express.json())
const cors = require('cors');
app.use(cors());


const empData=[];

app.get("/",(req,res)=>{

    res.status(200).json({
        success: true
        , data: empData
    });
})

app.post("/api/books",(req,res)=>{
    const {firstName,lastName}= req.body;
    const id = empData.length+1;

    if(!firstName || !lastName)
    {
        return res.status(404).json({
            success: false
            , data: "firstName or lastName is empty!!!!"
        });
    }
    const newEmployee = {
        id,
        firstName,
        lastName
      }
      empData.push(newEmployee);
      return   res.status(201).json({
        success: true
        , msg: "Emp record added!!!!!!",
        data:empData
    });
})
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});