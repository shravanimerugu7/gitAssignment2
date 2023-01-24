const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const BrandName = require('./model')

app.use(express.json()) // middle wear or body parser


app.get('/brands',(req, res) => {
    
    res.json([{
        brandName : "iphone",
        date : "22-7-2000"
    },
    {
        brandName : "OnePlus",
        date : "22-7-2016"
    
    },
    {
        brandName : "Samsung",
        date : "22-7-2016"
    
    }
]

  );
    
})

app.get("/oneplus",(req,res)=>{
    res.json({
        brandName : "OnePlus",
        date : "22-7-2016"
    
    })
        
})

app.get("/Samsung",(req,res)=>{
    res.json({
        brandName : "Samsung",
        date : "22-7-2016"
    
    })
        
})

app.post('/allbrands',async(req,res)=>{
    const {brandname} = req.body;
    try{
        const newData = new BrandName({brandname})
        await newData.save();
        return res.json(await BrandName.find())

    }
    catch(err){
        console.log(err.message);
    }
    
   
    
})

app.delete('/deletebrand',async(eq,res)=>{
    try{
        await BrandName.findByIdAndDelete(req.params.id);
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message)

    }
})

mongoose.connect(uri='mongodb://localhost:27017',(err)=>{
    
    if(!err){
        console.log("mongodb is connected....");
    }else{
        console.log(err);
    }

})
app.listen(3000,hostname=(err)=>{
    if(!err){
        console.log("surver is running...");
    }else{
        console.log(err);
    }
}) 