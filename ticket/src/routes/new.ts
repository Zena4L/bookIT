import { Router } from "express";
import { createTicket } from "../controllers/new";
import { requireAuth } from "@zetonticket/resources";

const router = Router();

router.post("/api/ticket", requireAuth, createTicket);

export { router as createTicket };
