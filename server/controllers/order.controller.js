import createError from "../middleware/errorHandler.js";
import Gig from "../models/gig.model.js";
import Order from "../models/order.model.js";

const getOrder = async (req, res, next) => {
  const orders = await Order.find({
    ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
    isCompleted: true,
  });
  res.status(200).send(orders);
};

const createOrder = async (req, res, next) => {
  const gigId = req.params.gigId;

  const gig = await Gig.findById(gigId);
  if (gig) {
    try {
      const newOrder = new Order({
        gigId: gig._id,
        buyerId: req.userId,
        sellerId: gig.userId,
        price: gig.price,
        img: gig.cover,
        title: gig.shortTitle[0],
        payment_intent: "intent_string",
      });
      await newOrder.save();
      res.status(200).send("Success");
    } catch (err) {
      next(err);
    }
  } else {
    next(createError(404, "No gig found"));
  }
};

const cancelOrder = async (req, res, next) => {};

export { createOrder, getOrder, cancelOrder };
