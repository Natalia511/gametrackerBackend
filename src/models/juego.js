import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: false,
  },
  plataforma: {
    type: String,
    required: true,
  },
  lanzamiento: {
    type: Number,
    required: false,
  },
});

const Juego = mongoose.model("Juego", juegoSchema);
export default Juego;
