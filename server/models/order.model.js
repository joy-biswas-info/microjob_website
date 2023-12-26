import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    gigId: {
      type: String,
      required,
    },
    buyerId: {
      type: String,
      required,
    },
    sellerId: {
      type: String,
      required,
    },
    img: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    payment_intent: {
        type: String,
        required,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
