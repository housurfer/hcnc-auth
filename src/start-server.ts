import { Express } from "express-serve-static-core";
import mongoose from "mongoose";
export const startServer = async (app: Express) => {
  if(!process.env.JWT_KEY){
    throw new Error('cant find key........');
  }
  try{
  await mongoose.connect('mongodb://auth-mongoose-srv:27017/authDB');
  console.log('Connected to mongoDB...');
  } catch (err){
    console.log(err);
  }
app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!!!!");
});
}