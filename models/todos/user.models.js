import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
     {
          username: {
               type: String,
               required: true,
               unique: true,
               lowercase: true,
          },
          email: {
               type: String,
               required: true,
               unique: true,
               lowercase: true,
          },
          password: {
               type: String,
               // required: [true, 'Password is required'],
               required: true,

          },
     }, { timestamps: true }
)



export const User = mongoose.model("User", userSchema);

// "User" -> this will convert into 'users' into mongoDb
// lowercase and plural conversion 