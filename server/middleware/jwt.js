import jwt from "jsonwebtoken";
import createError from "./errorHandler.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(500, "You are not authentucated!"));

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
  });
  next();
};
