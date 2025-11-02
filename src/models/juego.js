const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },  
    plataformas: {
        type: [String],
        required: true,     
    },
    portadaUrl: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,   
        required: true,
    },
    fechaLanzamiento: {
        type: Date, 
        required: true,
    },
    calificacion: {
        type: Number,   
        required: true,
        min: 0,
        max: 10,
    },
});

module.exports = mongoose.model('Juego', juegoSchema);