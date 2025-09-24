import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { Helado } from "./models/Helado.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Conexión a MongoDB (db Heladeria)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error MongoDB:", err));

// Rutas
// Crear helado
app.post("/api/helados", async (req, res) => {
  try {
    const nuevo = await Helado.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Obtener todos
app.get("/api/helados", async (_req, res) => {
  const helados = await Helado.find().sort({ createdAt: -1 });
  res.json(helados);
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 API en http://localhost:${process.env.PORT}`)
);
