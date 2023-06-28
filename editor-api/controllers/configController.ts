import fs from "fs";
import express from "express";

const CONFIG_PATH = "../config.json";

export const getConfig = (req: express.Request, res: express.Response) => {
  if (fs.existsSync(CONFIG_PATH)) {
    const data = fs.readFileSync(CONFIG_PATH, "utf-8");
    res.json(JSON.parse(data));
  } else {
    res.status(404).send("Configuration file not found!");
  }
};

export const updateConfig = (req: express.Request, res: express.Response) => {
  const newConfig = req.body;
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(newConfig, null, 2));
  res.status(200).send("Config file updated");
};
