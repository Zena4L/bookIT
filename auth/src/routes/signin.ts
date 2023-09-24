import { Router } from "express";
import { signin } from "../controllers/signin";
import { body } from "express-validator";

const router = Router();

router.post(
  "/api/users/signin",
  [
    body("email").trim().isEmail().withMessage("Provide a valid email"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 8 })
      .withMessage("Password must be a min of 4 and a max of 8"),
  ],
  signin
);

export { router as signin };
