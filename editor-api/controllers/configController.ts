import fs from "fs";
import express from "express";

const CONFIG_PATH = "./config.json";

export const getConfig = (req: express.Request, res: express.Response) => {
  try {
    const data = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8"));
    res.json(data);
  } catch (error) {
    res.status(404).send("Configuration file not found!");
  }
};

export const updateConfig = (req: express.Request, res: express.Response) => {
  try {
    const existingData = fs.readFileSync(CONFIG_PATH, "utf-8");
    const existingConfig = JSON.parse(existingData);
    
    const newConfig = { ...existingConfig, ...req.body };
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(newConfig, null, 2));

    res.status(200).send("Configuration updated successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the configuration file.");
  }
};