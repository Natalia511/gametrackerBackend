
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/utils/db.js";

import juegosRouter from "./src/routes/juegos.js";
import reseñasRouter from "./src/routes/resenas.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

connectDB();

app.use("/api/juegos", juegosRouter);
app.use("/api/resenas", reseñasRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor funcionando en el puerto 3000`);
});