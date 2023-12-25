import mongoose from 'mongoose';


// mini modal for "orderSchema"

const orderItemSchema = new mongoose.Schema({
     productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
     },
     quantity: {
          type: Number,
          required: true,
     },
});

const orderSchema = new mongoose.Schema({
     orderPrice: {
          type: Number,
          required: true,
     },
     customer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
     },
     orderItems: {
          type: [orderItemSchema],
          // using mini model here
          required: true,
     }

}, { timestamps: true });



export const Order = mongoose.model("Order", orderSchema);