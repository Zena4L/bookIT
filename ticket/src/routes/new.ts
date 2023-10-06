import { Router } from "express";
import { createTicket } from "../controllers/new";
import { notAuthorized } from "@zetonticket/resources";
const router = Router();

router.post("/api/ticket", notAuthorized, createTicket);

export { router as createTicket };
