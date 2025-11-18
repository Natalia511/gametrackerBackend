import express from "express";
import Juego from "../models/juego.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    const juegoGuardado = await nuevoJuego.save();
    res.status(201).json(juegoGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { categoria, genero } = req.query;
    const filtro = categoria ?? genero;

    let query = {};

    if (filtro) {
      query.genero = { $regex: new RegExp(`^${filtro}$`, "i") };
    }

    const juegos = await Juego.find(query);
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener juegos" });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const juego = await Juego.findById(req.params.id).populate("reseñas");
    if (!juego) return res.status(404).json({ message: "Juego no encontrado" });

    res.status(200).json(juego);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get("/generos/distinct", async (req, res) => {
  try {
    const generos = await Juego.distinct("genero");
    res.json(generos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener géneros" });
  }
});


router.get("/categorias", async (req, res) => {
  try {
    const categorias = await Juego.distinct("genero");
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo categorías" });
  }
});

router.get("/categorias/:genero", async (req, res) => {
  try {
    const juegos = await Juego.find({
      genero: { $regex: new RegExp(`^${req.params.genero}$`, "i") },
    });

    res.json(juegos);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo juegos por categoría" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const juegoActualizado = await Juego.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!juegoActualizado) {
      return res.status(404).json({ message: "Juego no encontrado" });
    }
    res.json(juegoActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


export default router;
