import mongoose from "mongoose";


const CompetenciaSchema = new mongoose.Schema({
    categoria: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },sexo: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    },relevo: {
        type: mongoose.Schema.Types.Boolean, required: true, trim: true,
    }
});

export  const Competencia = mongoose.model("Competencia", CompetenciaSchema);