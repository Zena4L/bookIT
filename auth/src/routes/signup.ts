import { Router } from "express";
import { signup } from "../controllers/signup";
import { body } from "express-validator";
import { requestValidation } from "@zetonticket/resources";

const router = Router();

router.post(
  "/api/users/signup",
  [
    body("email").trim().isEmail().withMessage("Provide a valid email"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 8 })
      .withMessage("password must be a min of 4 and a max of 8"),
  ],
  requestValidation,
  signup
);

export { router as signup };
