import express from "express";
import { config } from "dotenv";
import { connectDb } from "./config/db.js";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

config();
connectDb();

app.use(express.json());
app.use(cors());

// routes
app.use("/todo", todoRoutes);

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`listen @ http://localhost:${PORT}`);
});
