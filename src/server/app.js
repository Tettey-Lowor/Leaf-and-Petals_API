import Express  from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { router } from '../routes/allroutes.js';

dotenv.config()
const PORT= process.env.PORT || 4003
const app = Express();
app.use(Express.json())
app. use (router)

const mongoUri = process.env.MONGO_URI
// mongoose.connect(mongoUri).then(() => {

// }). catch ((error) => console.log(error))

try{
    await mongoose.connect(mongoUri)

}catch (error) {
    console.log(error)
}


 
  
app.listen(PORT, () => {
    console.log (`espress app is running ${PORT}`)
});