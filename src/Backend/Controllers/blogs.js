const express = require('express'); 
const app = express(); 
const PORT = 3003; 

const blogs = [
    {id: 1, 
    title: 'REST API using Node.js/Express', 
    content:'REST API'}, 

]

app.get('/blogs', (req, res)=>{
    res.json(blogs);
})

app.listen(PORT, ()=> {
    console.log(`PORT ${PORT}`); 
})
