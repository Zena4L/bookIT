import { Router } from "express";
import { signout } from "../controllers/signout";

const router = Router();

router.get("/api/users/signout", signout);

export { router as signout };
