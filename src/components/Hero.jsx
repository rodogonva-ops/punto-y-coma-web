import React from 'react';

function Hero() {
  return (
    <section style={{ backgroundColor: '#003B73', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
      <img 
        src="/logo-tiburon.png" 
        alt="Punto y Coma Logo" 
        style={{ width: '120px', marginBottom: '20px', borderRadius: '50%' }} 
      />
      <h1 style={{ fontSize: '3rem', margin: '0', fontWeight: 'bold' }}>
        Punto y Coma Camarón
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#60A3D9', marginBottom: '30px' }}>
        El mejor sabor de Ciudad Granja, directo a tu mesa.
      </p>
      
      <img 
        src="/ceviche-principal.jpg" 
        alt="Ceviche Especial" 
        style={{ width: '100%', maxWidth: '600px', height: '400px', objectFit: 'cover', borderRadius: '15px', marginBottom: '30px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }} 
      />
      
      <br />
      <a 
        href="https://wa.me/523311524607?text=Hola,%20vengo%20de%20su%20sitio%20web%20y%20me%20gustaría%20hacer%20un%20pedido%20a%20domicilio." 
        target="_blank" 
        rel="noreferrer" 
        style={{ backgroundColor: '#D32F2F', color: 'white', padding: '18px 35px', textDecoration: 'none', borderRadius: '50px', fontSize: '1.3rem', fontWeight: 'bold', display: 'inline-block', boxShadow: '0 4px 6px rgba(211, 47, 47, 0.4)' }}
      >
        🛵 Pide a Domicilio por WhatsApp
      </a>
    </section>
  );
}

export default Hero;