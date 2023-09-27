import { Router } from "express";
import { body } from "express-validator";
import { requestValidation } from "../middlewares/requestValidation";
import { signin } from "../controllers/signin";

const router = Router();

router.post(
  "/api/users/signin",
  body("email").trim().isEmail().withMessage("Provide a valid email"),
  body("password").trim().notEmpty().withMessage("Provide Password"),
  requestValidation,
  signin
);

export { router as signin };
