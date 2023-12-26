import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    ConversationId: {
      type: String,
      required,
    },
    UserId: {
      type: String,
      required,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Conversation", conversationSchema);
