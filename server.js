var express = require('express')

var app=express()
var port=7000;
app.get('/',(req,res)=>{
    res.send('<h1>HELLO WORLD</h1>');
})
app.get('/about',(req,res)=>{
    res.send('About page');
})
app.get('/user/:name',(req,res)=>{
    var userName=req.params.name;

    res.send('Hello,${username}!');
})

app.listen(port,()=>{
    console.log('server running')
})