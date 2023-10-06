import { Router } from "express";
import { show } from "../controllers/showTicket";

const router = Router();

router.get("/api/ticket/:id", show);

export { router as showTicket };
