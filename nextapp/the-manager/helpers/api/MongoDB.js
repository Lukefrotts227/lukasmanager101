import { getConfig } from 'next/config'; 
import mongoose from 'mongoose'; 


const { serverRuntimeConfig } = getConfig(); 

const Schema = mongoose.Schema; 

mongoose.connect(process.env.MONGO_URI); 
mongoose.Promise = global.Promise;