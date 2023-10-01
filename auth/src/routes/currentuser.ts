import { Router } from "express";
import { currentUser } from "@zetonticket/resources";
import { currentuser } from "../controllers/currentuser";

const router = Router();

router.get("/api/users/currentuser", currentUser, currentuser);

export { router as currentuser };
