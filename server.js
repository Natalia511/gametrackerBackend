
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/utils/db.js";

import juegosRouter from "./src/routes/juegos.js";
import reseñasRouter from "./src/routes/resenas.js";
import usuariosRouter from "./src/routes/usuarios.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5174"
}));

app.use(express.json());

connectDB();

app.use("/api/juegos", juegosRouter);
app.use("/api/resenas", reseñasRouter);
app.use("/api", usuariosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor funcionando en el puerto 3000`);
});