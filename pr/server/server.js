const express = require('express');

const app =express();

app.get('/',(req,res)=>{
    res.send('<h1>hello world1</h1>');
})

app.get('/data',(req,res)=>{
    res.json({name:'wang',type:'web'});
})

app.listen(9093,()=>(
    console.log('node app start at port 9093')
));