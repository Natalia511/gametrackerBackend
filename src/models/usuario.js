const usuariosSchema = new Schema({
    nombreUsuario: {
        type: String,   
        required: true,
        unique: true,
    },  
    email: {
        type: String,   
        required: true, 
        unique: true,
    },
    contraseña: {   
        type: String,
        required: true,
    },
    fechaRegistro: {
        type: Date, 
        default: Date.now,
    },
});