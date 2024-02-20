import express, { Router } from "express";
import { authController } from "../controller/auth.controller.js";

const router = new Router();

router.use("/register", authController);

export default router;
