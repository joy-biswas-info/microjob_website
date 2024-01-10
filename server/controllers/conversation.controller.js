import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";
import createError from "../middleware/errorHandler.js";

const createConversation = async (req, res, next) => {
  const messageTo = req.body.to;

  const messageToUser = await User.findById(messageTo);

  if (messageToUser) {
    if (req.isSeller && messageToUser.isSeller) {
      return next(createError(403, "A seller can't message a seller"));
    }
  }

  try {
    const newConversation = new Conversation({
      id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
      sellerId: req.isSeller ? req.userId : req.body.to,
      buyerId: req.isSeller ? req.body.to : req.userId,
      readBySeller: req.isSeller,
      readByBuyer: !req.isSeller,
    });
    const savedConversation = await newConversation.save();
    res.status(201).send(savedConversation);
  } catch (err) {
    next(err);
  }
};
const getConversation = async (req, res, next) => {
  try {
    const q = req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId };
    const conversations = await Conversation.find(q);
    res.status(200).send(conversations);
  } catch (err) {
    next(err);
  }
};
const getSingleConversation = async (req, res, next) => {
  try {
    const getSingleConversation = await Conversation.findOne({
      id: req.params.id,
    });

    res.status(200).send(getSingleConversation);
  } catch (err) {
    next(err);
  }
};
const updateConversation = async (req, res, next) => {
  try {
    console.log("Hit");
    const updatedConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      {
        new: true,
      }
    );

    res.status(200).send(updatedConversation);
  } catch (err) {
    next(err);
  }
};

export {
  createConversation,
  getConversation,
  getSingleConversation,
  updateConversation,
};
