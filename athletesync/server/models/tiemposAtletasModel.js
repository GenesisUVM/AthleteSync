import mongoose from "mongoose";


const TiemposSchema = new mongoose.Schema({
    competencia:{
        type: mongoose.Schema.Types.ObjectId, required: true, trim: true,
    },nombre: {
        type: mongoose.Schema.Types.ObjectId, required: true, trim: true,
    },tiempo: {
        type: mongoose.Schema.Types.String, required: true, trim: true,
    }
});

export  const Tiempo = mongoose.model("TiempoAtleta", TiemposSchema);