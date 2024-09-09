import rateLimit from "express-rate-limit";

export const postLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 10,
  message: 'Too many requests from this IP, please try again after 5 minutes.',
  standardHeaders: true,
  legacyHeaders: false,
});