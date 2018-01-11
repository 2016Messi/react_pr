const express = require('express');
const mongoose = require('mongoose');
//  连接mongo  并且使用react这个集合
const DB_URL = 'mongodb://localhost:27017/react';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function() {
    console.log(" mongo connect success ");
});

const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}));
// //  新增数据
// User.create({
//     user:'xiaoli',
//     age:18
// },function(err,doc) {
//     if(!err){
//         console.log(doc);
//     }else{
//         console.log(err);
//     }
// });

//新建app
// User.update({'user':'xiaoli'},{'$set':{age:23}},function(err,doc){
//     console.log();
// })
// User.remove({age:18},function(err,doc) {
//     console.log(doc);
// })

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>hello world1</h1>');
})

app.get('/data',(req,res)=>{
   User.find({},function(err,doc) {
        return res.json(doc);
   })
})

app.listen(9093,()=>(
    console.log('node app start at port 9093')
));