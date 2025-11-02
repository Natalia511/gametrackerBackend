import express from "express";
import Reseña from "../models/reseña.js";

const router = express.Router();


router.post("/reseñas", async (req, res) => {
  try {
    const nuevaReseña = new Reseña(req.body);
    const reseñaGuardada = await nuevaReseña.save();
    res.status(201).json(reseñaGuardada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/reseñas", async (req, res) => {
  try {
    const reseñas = await Reseña.find();
    res.status(200).json(reseñas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
