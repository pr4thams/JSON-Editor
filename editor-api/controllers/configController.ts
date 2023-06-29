import fs from "fs";
import express from "express";

const CONFIG_PATH = "./config.json";

// Fetches and sends the configuration file.
export const getConfig = (req: express.Request, res: express.Response) => {
  try {
    const data = fs.readFileSync(CONFIG_PATH, "utf-8");
    const parsedData = JSON.parse(data);
    res.json(parsedData);
  } catch (error) {
    res.status(404).send("Configuration file not found!");
  }
};

// Updates the configuration file.
export const updateConfig = (req: express.Request, res: express.Response) => {
  try {
    const existingData = fs.readFileSync(CONFIG_PATH, "utf-8");
    const existingConfig = JSON.parse(existingData);
    const updatedConfig = { ...existingConfig, ...req.body };
    const updatedConfigFormatted = JSON.stringify(updatedConfig, null, 2);
    
    fs.writeFileSync(CONFIG_PATH, updatedConfigFormatted);
    res.status(200).send("Configuration updated successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the configuration file.");
  }
};
