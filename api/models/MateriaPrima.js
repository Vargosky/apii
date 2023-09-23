const { number } = require("joi");
const { Schema, model } = require("mongoose");

const MateriaPrimaSchema = Schema({
    nombre: { 
        type: String, 
        required: true },

    unidad: { 
        type: String, 
        required: true },

    cantidad: { 
        type: Number, 
        required: false,
        default: 0,    
    },

    costoPorUnidad: { 
        type: Number, 
        required: false },

    proveedor: {
            type: String, 
            required: false },

    fechaExpiracion: {
            Type:Date,
            require:false
        },

    creadoDate: { 
        type: Date, 
        default: Date.now },

    updatedDate: { 
        type: Date, 
        default: Date.now },

    stockCritico:{
        type: Number,
        require:false
    }
});

module.exports = model("MateriaPrima", MateriaPrimaSchema, "materiaPrima");