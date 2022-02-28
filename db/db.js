const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/authgql",{

}).then(()=>{
    console.log("db is succesfully connected");
}).catch(()=>{
    console.log("db is not conneted");
})