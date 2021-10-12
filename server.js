'use strict'; 

const express = require('express');
const app= express();
app.use(express.json());

const PORT=process.env.PORT || 8000
 
const cors = require('cors');
app.use(cors());

require('dotenv').config();

const mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGO_SERVER}/languages`, { useNewUrlParser: true });

const {getApi, createLang ,getLang,deleteLang,ubdateLang} = require('./Controler/controler')

app.get('/getApi',getApi);

app.post('/createLang',createLang);

app.get('/getLang',getLang);

app.delete('/deleteLang/:id',deleteLang);

app.put('/ubdateLang/:id',ubdateLang)

app.listen(PORT)