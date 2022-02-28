const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    authorID:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    }
},{
    timestamps:true
})

module.exports=mongoose.model('post',postSchema)