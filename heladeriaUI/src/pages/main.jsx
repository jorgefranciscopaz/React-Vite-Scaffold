import { useEffect, useState } from "react";
import { api } from "../api";
import HeladoForm from "../components/HeladoForm.jsx";
import HeladoList from "../components/HeladoList.jsx";
import "../styles.css";

export default function Main() {
  const [helados, setHelados] = useState([]);

  const cargar = async () => {
    const { data } = await api.get("/helados");
    setHelados(data);
  };

  useEffect(() => { cargar(); }, []);

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Heladería</h1>
      </header>

      <section className="card">
        <HeladoForm onCreado={(nuevo) => setHelados([nuevo, ...helados])} />
      </section>

      <section className="card list">
        <HeladoList
          items={helados}
          onEliminado={(id) => setHelados(helados.filter(h => h._id !== id))}
        />
      </section>

      <p className="footer">Hecho con React + Express + MongoDB Atlas</p>
    </div>
  );
}
