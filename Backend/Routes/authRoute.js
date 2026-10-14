import express from "express";
import { signup } from "../Controls/auth.js";
const router=express.Router();

router.post('/signup',signup);

export default router;