const mongoose = require('mongoose'); 

const url = ''; 

mongoose.connect(url)
    .then(()=>{
        console.log("MongoDB connected"); 
    })
    .catch((error)=>{
        console.log(`MongoDB not connected` + error.message);
    });

const blogSchema = new mongoose.Schema({
    blog: String,  
    data: Date
})

module.exports = mongoose.model('Blog', blogSchema); 


