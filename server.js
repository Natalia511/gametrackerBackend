const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/utils/db');


const cors = require('cors');
dotenv.config();
const app = express();
connectDB();
app.use(cors());

app.use(express.json());

app.use("/api/juegos", require("./src/routes/juegos"));
app.use("/api/reseñas", require("./src/routes/reseñas"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`servidor funcionando en el puerto 3000`);
});