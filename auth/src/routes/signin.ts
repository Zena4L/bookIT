import { Router } from "express";
import { signin } from "../controllers/signin";
import { body } from "express-validator";

const router = Router();

router.post("/api/users/signin", signin);

export { router as signin };
