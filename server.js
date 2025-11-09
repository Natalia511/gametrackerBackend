import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/utils/db.js";

import juegosRouter from "./src/routes/juegos.js";
import reseñasRouter from "./src/routes/reseñas.js";
import usuariosRouter from "./src/routes/usuarios.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

connectDB();

app.use("/api", juegosRouter);
app.use("/api", reseñasRouter);
app.use("/api", usuariosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor funcionando en el puerto 3000`);
});