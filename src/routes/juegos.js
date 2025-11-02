const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/utils/db');
const juego = require('./src/models/juego');

const cors = require('cors');
dotenv.config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

Router.post('/juegos', async (req, res) => {
    try {
        const nuevoJuego = new juego(req.body); 
        const juegoGuardado = await nuevoJuego.save();
        res.status(201).json(juegoGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }   
});
Router.get('/juegos', async (req, res) => {
    try {
        const juegos = await juego.find();  
        res.status(200).json(juegos);
    }   
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = Router;
