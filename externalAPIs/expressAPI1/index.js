require('dotenv').config();

const express = require('express'); 
const cors = require('cors');
const mongoose = require('./db'); 

const app = express(); 

const port = process.env.PORT; 

app.use(express.json());
app.use(cors());

app.get('api/users/getUser', async(req, res) =>{

}); 



app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);

}); 

