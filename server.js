const express =require("express")
const cors = require("cors")
const jwt = require('jsonwebtoken')
const helmet = require("helmet")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
dotenv.config();


const app = express();
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("connected successfully"))


app.get("/" , (req,res)=>{
    res.json({message:"hello world "})
})
app.listen(5000)