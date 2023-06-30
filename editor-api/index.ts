import express from "express";
import cors from "cors";
import configRoutes from "./routes/configRoutes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/config", configRoutes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
