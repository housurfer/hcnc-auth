import { Password } from './../common/hashing';
import mongoose from "mongoose";
import { json } from "body-parser";

interface UserFields {

  email : string,
  password : string

}
interface UserDoc extends mongoose.Document{
  email : string,
  password :string

}
const userSchema = new mongoose.Schema({
  email: {
    type : String,
    required : true
  }, 
  password: {
    type: String,
    required : true
  }

}, {
  toJSON : {
    transform(doc,ret){
      ret.id = ret._id;
      delete ret.password;
      delete ret._id;
      delete ret.__v;
    }


  }


});

userSchema.pre('save',async function(done) {
  if(this.isModified('password')){
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (user: UserFields) =>{
  return new User(user);

} 
interface UserModel extends mongoose.Model<UserDoc>{
 build(user: UserFields) : UserDoc;
}
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User}
