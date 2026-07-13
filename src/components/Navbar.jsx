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
      fontFamily: 'sans-serif',
      position: 'sticky', /* Esto hace que se quede pegada arriba */
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#FFF', letterSpacing: '1px' }}>
        Punto y Coma Camarón
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0, padding: 0, fontSize: '1.1rem' }}>
        <li><a href="#inicio" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Inicio</a></li>
        <li><a href="#menu" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Menú</a></li>
        <li><a href="#nosotros" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Nosotros</a></li>
        <li><a href="#contacto" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;