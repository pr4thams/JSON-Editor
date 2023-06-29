import express from "express";
import cors from "cors";
import configRoutes from "./routes/configRoutes";

const app = express();
app.use(cors());

// Enable JSON body parsing
app.use(express.json());

app.use("/config", configRoutes);

const PORT = 3100;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
