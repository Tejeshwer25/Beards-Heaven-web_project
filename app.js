const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine ','pug')
app.set('views', path.join(__dirname,'views'))

app.get('/', (req,res)=>{
    const con = "Hello World"
    const params = {'title':'Aur Sunao', 'content':con}
    res.status(200).render('index.pug', params);
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})