const express = require('express')

const app = express();

app.get('/',function(req,res){
    const id = req.query.id
   res.send('Hello World'+id) 
})
app.get('/narender',function(req,res){
    res.send('Name: Narender,age: 25')
})
app.get('/narender/:id',function(req,res){
    const id = req.params.id;
    res.send('hey Narender '+ id)
})
app.listen(8080, function(req,res){
    console.log('running....')
})