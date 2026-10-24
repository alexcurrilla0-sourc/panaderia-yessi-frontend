import { useEffect, useState } from 'react';

function App() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/productos')
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch(() => setError('No se pudo conectar con el servidor'));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Panadería Yessi</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
        {productos.map((p) => (
          <div key={p.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px' }}>
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>
            <p><strong>${Number(p.precio).toFixed(2)}</strong></p>
            <small>{p.categoria}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;