import express from "express";
import * as configController from "../controllers/configController";

const router = express.Router();

router.get("/", configController.getConfig);
router.put("/", configController.updateConfig);

export default router;
