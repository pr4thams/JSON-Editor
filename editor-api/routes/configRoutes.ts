import express from "express";
import * as configController from "../controllers/configController";

const router = express.Router();

// Route to fetch the current configuration
router.get("/", configController.getConfig);

// Route to update the configuration
router.post("/", configController.updateConfig);

export default router;
