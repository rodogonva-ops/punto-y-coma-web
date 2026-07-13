import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#001F3F', padding: '20px 40px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #D32F2F' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFF' }}>
        Punto y Coma Camarón
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0, padding: 0, fontSize: '1.1rem' }}>
        <li style={{ cursor: 'pointer' }}>Inicio</li>
        <li style={{ cursor: 'pointer' }}>Menú</li>
        <li style={{ cursor: 'pointer' }}>Nosotros</li>
        <li style={{ cursor: 'pointer' }}>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;