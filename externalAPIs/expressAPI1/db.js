const mongoose = require("mongoose"); 



mongoose.connect(
    process.env.MONGO_URI
).then( () => {console.log("successfully connected to mongoDB")}).catch((err) =>console.error("MongoDB connection error: " + err)); 

module.exports = mongoose; 


