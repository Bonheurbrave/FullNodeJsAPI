const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true , "title is required"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "description is required"],
        trim:true
    }
    ,
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true, "userId is required "]
    }

} , {timestamps:true})


module.exports = mongoose.model("Posts" , PostSchema);