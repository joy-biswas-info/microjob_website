import createError from "../middleware/errorHandler.js";
import Gig from "../models/gig.model.js";

//! Creating A New Gig
const createGig = async (req, res, next) => {
  if (!req.isSeller) {
    return next(createError(403, "Only a seller can create a gig"));
  }

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const saveGig = await newGig.save();
    res.status(201).json(saveGig);
  } catch (err) {
    next(err);
  }
};

//! All Gigs Of Seller
const gigs = async (req, res, next) => {
  if (!req.isSeller) {
    return next(createError(403, "Only a seller can create a gig"));
  }

  try {
    const gigs = await Gig.find({
      userId: req.userId,
    });
    if (!gigs) {
      res.status(200).json("You have no gig");
    }
    res.status(200).json(gigs);
  } catch (err) {
    next(err);
  }
};

//! Single Gig
//============
const singleGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      return next(createError(404, "No gig found!"));
    }

    res.status(200).json(gig);
  } catch (err) {
    next(err);
  }
};

//!  Updating A Gig
//==================
const updateGig = (req, res, next) => {};

// ! Deleting A Gig
const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      return next(createError(404, "No gig found!"));
    }
    if (gig.userId !== req.userId) {
      return next(createError(403, "Only owner can delete the gig"));
    }
    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).json("The gig has been deleted!");
  } catch (err) {
    next(err);
  }
};

//! Exporting All Functions
export { createGig, gigs, singleGig, updateGig, deleteGig };
