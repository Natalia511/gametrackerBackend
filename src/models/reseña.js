const reseñaSchema = new mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true, 
    },
    clasificacion: {
        type: Number,
        required: true, 
        min: 0,
        max: 5,
    },
    comentario: {
        type: String,   
        required: true,
    },
    juegoid: {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Juego',
        required: true,
    },
});