import { Router } from "express";
import { createTicket } from "../controllers/new";

const router = Router();

router.post("/api/ticket", createTicket);

export { router as createTicket };
