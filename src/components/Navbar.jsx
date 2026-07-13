import React from 'react';

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#001F3F', 
      padding: '20px 40px', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      borderBottom: '3px solid #B30000',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#FFF', letterSpacing: '1px' }}>
        Punto y Coma Camarón
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0, padding: 0, fontSize: '1.1rem' }}>
        <li style={{ cursor: 'pointer', fontWeight: '500' }}>Inicio</li>
        <li style={{ cursor: 'pointer', fontWeight: '500' }}>Menú</li>
        <li style={{ cursor: 'pointer', fontWeight: '500' }}>Nosotros</li>
        <li style={{ cursor: 'pointer', fontWeight: '500' }}>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;