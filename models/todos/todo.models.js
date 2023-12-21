import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
     content: {
          type: String,
          required: true,
     },
     complete: {
          type: Boolean,
          default: false,
     },
     createdBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          // reference from user.models.js file
     },
     subTodos: {
          type: [
               {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "SubTodo"
                    // reference from sub_todo.models.js file
               }
          ],

     }
}, { timestamps: true });


export const Todo = mongoose.modal('Todo', todoSchema);