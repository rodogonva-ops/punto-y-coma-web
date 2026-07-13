import React from 'react';

function Footer() {
  return (
    <footer id="contacto" style={{ backgroundColor: '#001F3F', color: 'white', padding: '45px 20px', textAlign: 'center', borderTop: '3px solid #B30000', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ color: '#FFF', fontSize: '1.6rem', marginBottom: '12px', fontWeight: 'bold' }}>Punto y Coma Camarón</h3>
        <p style={{ margin: '5px 0', fontSize: '1.05rem', color: '#CCC' }}>📍 Entregas a domicilio en Ciudad Granja y alrededores</p>
        <p style={{ margin: '5px 0', fontSize: '1.05rem', color: '#CCC' }}>🛵 Tu comida fresca y segura hasta tu puerta</p>
      </div>
      <div style={{ margin: '20px 0', fontSize: '0.95rem', color: '#88C6FF' }}>
        © 2026 Punto y Coma Camarón - Todos los derechos reservados
      </div>
      <div style={{ fontSize: '1rem', color: '#FFF', fontWeight: 'bold' }}>
        📞 Pedidos directos por WhatsApp: 33 1152 4607
      </div>
    </footer>
  );
}

export default Footer;