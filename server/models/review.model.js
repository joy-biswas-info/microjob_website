import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    gigId: {
      type: String,
      required,
    },
    userId: {
      type: String,
      required,
    },
    star: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
    desc: {
      type: String,
      required,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", reviewSchema);
