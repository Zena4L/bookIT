import { Router } from "express";
import { currentUser } from "../middlewares/currentUser";
import { currentuser } from "../controllers/currentuser";

const router = Router();

router.get("/api/users/currentuser", currentUser, currentuser);

export { router as currentuser };
