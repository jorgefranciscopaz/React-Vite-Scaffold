import { api } from "../api";

export default function HeladoList({ items, onEliminado }) {
  const eliminar = async (id) => {
    try {
      await api.delete(`/helados/${id}`);
      onEliminado(id);
    } catch (err) {
      alert("❌ " + (err?.response?.data?.error || err.message));
    }
  };

  if (!items.length) {
    return <div className="item">No hay helados aún. ¡Agrega el primero! 🍨</div>;
  }

  return (
    <>
      {items.map(h => (
        <div key={h._id} className="item">
          <div className="item__main">
            <span className="name">{h.nombre}</span>
            <span className="price">${Number(h.precio).toFixed(2)}</span>
            <span className="sku">SKU: {h.sku}</span>
            <span className={`badge ${h.sirve === "waffle" ? "badge--waffle" : ""}`}>
              {h.sirve}
            </span>
          </div>
          <button className="btn btn--danger" onClick={() => eliminar(h._id)}>Eliminar</button>
        </div>
      ))}
    </>
  );
}
