import React from 'react';

function About() {
  return (
    <section id="nosotros" style={{ backgroundColor: '#001F3F', color: 'white', padding: '60px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ color: '#FFD700', fontSize: '2.4rem', marginBottom: '20px', fontWeight: 'bold' }}>¿Por qué elegirnos?</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.2rem', lineHeight: '2' }}>
          <li>✔️ Mariscos 100% frescos y preparados al momento</li>
          <li>✔️ Salsas negras exclusivas de la casa</li>
          <li>✔️ Entregas rápidas y seguras en Ciudad Granja</li>
          <li>✔️ Porciones súper bien servidas para quitar el antojo</li>
        </ul>
      </div>
      <div style={{ textAlign: 'center', paddingBottom: '20px' }}>
        <h2 style={{ color: '#FFD700', fontSize: '2.4rem', marginBottom: '20px', fontWeight: 'bold' }}>Contacto</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.2rem', lineHeight: '2' }}>
          <li>📍 Servicio a domicilio (Llegamos hasta tu puerta)</li>
          <li>📞 Atención rápida y directa por WhatsApp</li>
          <li>💬 Mándanos un mensaje y preparamos tu pedido</li>
        </ul>
      </div>
    </section>
  );
}

export default About;