const mongoose = require("mongoose"); 


const UserSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        minlength: 1, 
        maxlength: 4,

    },
    id :{

    }, 
})