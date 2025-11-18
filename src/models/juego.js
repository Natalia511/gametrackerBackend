 import mongoose from "mongoose";

    const juegoSchema = new mongoose.Schema({
        titulo: { type: String, required: true },
                    descripcion: { type: String, required: true },
                    genero : { type: String, required: true },
                     imagen: { type: String, required: false },
                    plataforma: { type: String, required: true },
                    lanzamiento: { type: Date, required: true },
                    desarrollador: { type: String, required: true },

                    reseñas: [
                      {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Resena",
                      },
                    ],
                  });

                  const Juego = mongoose.model("Juego", juegoSchema);
                  export default Juego;
