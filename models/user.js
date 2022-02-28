const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
    type:String,
    required:true
    },
    password:{
       type: String,
       require:true,
       select:false
    },
    email:{
       type:String,
       required:true,
       unique:true,
       match:[
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "please enter the valid email"
       ]
    },
    displayName:{
        type:String,
        require:true
    },
    
},
{timestamps:true}
)

module.exports=mongoose.model("user",userSchema)