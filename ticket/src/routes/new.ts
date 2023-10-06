import { Router } from "express";
import { body } from "express-validator";
import { createTicket } from "../controllers/new";
import { requestValidation } from "@zetonticket/resources";
const router = Router();

router.post(
  "/api/ticket",
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
  ],
  requestValidation,
  createTicket
);

export { router as createTicket };
