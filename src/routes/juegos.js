import express from "express";
import Juego from "../models/juego.js";


const router = express.Router();

router.post("/juegos", async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    const juegoGuardado = await nuevoJuego.save();
    res.status(201).json(juegoGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/juegos", async (req, res) => {
  try {
    const juegos = await Juego.find();
    res.status(200).json(juegos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
 
  router.get("/juegos/:id", async (req, res) => {
  try {
    const juego = await Juego.findById(req.params.id).populate("resenas");
    if (!juego) {
      return res.status(404).json({ message: "Juego no encontrado" });
    }
    res.status(200).json(juego);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
