import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

const createMessages = async (req, res, next) => {
  const newMessage = new Message({
    conversationId: req.body.conversationId,
    userId: req.userId,
    message: req.body.message,
  });
  try {
    const savedMessage = await newMessage.save();

    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.desc,
        },
      }
    );

    res.status(201).send(savedMessage);
  } catch (err) {
    next(err);
  }
};
const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({
      ConversationId: req.params.id,
    });

    res.status(200).send(messages);
  } catch (err) {
    next(err);
  }
};

export { createMessages, getMessages };
