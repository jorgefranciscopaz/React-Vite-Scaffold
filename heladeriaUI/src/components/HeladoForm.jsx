import { useState } from "react";
import { api } from "../api";

export default function HeladoForm({ onCreado }) {
  const [form, setForm] = useState({ nombre: "", precio: "", sku: "", sirve: "galleta" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form, precio: Number(form.precio) };
      const { data } = await api.post("/helados", payload);
      onCreado(data);
      setForm({ nombre: "", precio: "", sku: "", sirve: "galleta" });
    } catch (err) {
      alert("❌ " + (err?.response?.data?.error || err.message));
    }
  };

  return (
    <form className="form" onSubmit={submit}>
      <div className="form__row">
        <input className="input" name="nombre" placeholder="Nombre" value={form.nombre} onChange={change} required />
        <input className="input" name="precio" type="number" step="0.01" placeholder="Precio" value={form.precio} onChange={change} required />
      </div>

      <div className="form__row">
        <input className="input" name="sku" placeholder="SKU" value={form.sku} onChange={change} required />
        <select className="select" name="sirve" value={form.sirve} onChange={change}>
          <option value="galleta">Galleta</option>
          <option value="waffle">Waffle</option>
        </select>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="btn" type="submit">Agregar</button>
      </div>
    </form>
  );
}
