import mongoose from "mongoose";

const heladoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  sku: { type: String, unique: true, required: true },
  sirve: { type: String, enum: ["galleta", "waffle"], required: true }
}, { timestamps: true });

export const Helado = mongoose.model("Helado", heladoSchema);
