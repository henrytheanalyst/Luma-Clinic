import express from "express";
import { getDashboardStats } from "../Controls/dashboardController.js";
const router=express.Router();

router.get('/stats',getDashboardStats);

export default router;