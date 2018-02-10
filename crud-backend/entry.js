const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
//const http = require('http');

const app = express(); 

const route = require('./route/routes.js');

// connect to mongo
mongoose.connect('mongodb://localhost:27017/pele-lanches',{
   useMongoClient:true,  
});

// on connection
mongoose.connection.on('connected', ()=> {
    console.log('mongodb connected');
});

// error connection
mongoose.connection.on('error', (err)=> {
    console.log(err);
});

const PORT = process.env.PORT || 3000;


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json());



app.use('/api', route);

app.use(express.static(path.join(__dirname,'public')));

app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'public/index.html'));
})


app.get('/', (req,res)=> {
   res.send('some change');
})



app.listen(PORT, ()=> {
    console.log('Server has been started on port:', + PORT);
});