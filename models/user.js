import { model,models } from "mongoose";

 const UserSchema = newSchema({
 
    email:{
        type: String,
        unique: [true, 'email already exists musoro bhangu!'],
        required: [true, 'email is required'],

    },
    username:{
        type: String,
        unique: [true, 'Username is required. Isa zita rako rema humbwe'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
 });

 // look into the model.user and see if its there, and if not then create a new model. 

 const User = models.User || model('User', UserSchema)

 export default User;