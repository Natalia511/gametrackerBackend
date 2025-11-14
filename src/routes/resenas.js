import Juego from "../models/juego.js";
import express from "express";
import Resena from "../models/resena.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { nombreUsuario, clasificacion, comentario, juegoid } = req.body;

    const juegoExiste = await Juego.findById(juegoid);
    if (!juegoExiste) {
      return res.status(404).json({ error: "El juego no existe" });
    }

    const nuevaResena = new Resena({
      nombreUsuario,
      clasificacion,
      comentario,
      juegoid,
    });

    const guardada = await nuevaResena.save();

    juegoExiste.reseñas.push(guardada._id);
    await juegoExiste.save();

    const populated = await Resena.findById(guardada._id).populate("juegoid", "titulo");
    res.status(201).json(populated);

  } catch (error) {
    console.error("Error al agregar reseña:", error.message);
    res.status(500).json({ error: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const reseñas = await Resena.find().populate("juegoid", "titulo");
    res.json(reseñas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las reseñas" });
  }
});

router.get("/juego/:id", async (req, res) => {
  try {
    const reseñas = await Resena.find({ juegoid: req.params.id });
    res.json(reseñas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener reseñas del juego" });
  }
});

export default router;
