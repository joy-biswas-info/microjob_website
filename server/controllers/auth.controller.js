import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../middleware/errorHandler.js";

//! User Register controller

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);

    const newUser = new User({
      ...req.body,
      password: hash,
    });
    // console.log(newUser);

    await newUser.save();
    res.status(201).send("User Created successfully");
  } catch (error) {
    next(createError(500, "Something went wrong!"));
  }
};

//! User login controller

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(400, "Wrong password or username !"));
    const { password, ...info } = user._doc;

    // Create token
    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (error) {
    next(createError(500, "Something went wrong "));
  }
};

//! User logout controller

export const logout = async (req, res, next) => {
  try {
  } catch (error) {
    next(createError(500, "Something went wrong "));
  }
};
