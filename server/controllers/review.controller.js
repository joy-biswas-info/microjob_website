import Gig from "../models/gig.model.js";
import Review from "../models/review.model.js";

const createReview = async (req, res, next) => {
  const newReview = new Review({ ...req.body, userId: req.userId });

  try {
    const savedReview = await newReview.save();
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStar: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

const deleteReview = async (req, res, next) => {};
const updateReview = async (req, res, next) => {};
const getReview = async (req, res, next) => {
  const gigId = req.params.gigId;
  try {
    const reviews = await Review.find({ gigId: gigId });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};

export { createReview, deleteReview, updateReview, getReview };
