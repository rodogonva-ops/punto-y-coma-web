import React from 'react';

function Hero() {
  return (
    <section style={{ backgroundColor: '#003B73', color: 'white', padding: '80px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px' }}>
      
      <img 
        src="/favicon.png" 
        alt="Punto y Coma Logo" 
        style={{ width: '130px', borderRadius: '50%', border: '3px solid white' }} 
      />
      
      {/* Aquí arreglé el amontonamiento con lineHeight y quitando márgenes extra */}
      <h1 style={{ fontSize: '3.5rem', margin: '0', fontWeight: '800', lineHeight: '1.1' }}>
        Punto y Coma Camarón
      </h1>
      
      <p style={{ fontSize: '1.5rem', color: '#88C6FF', margin: '0', lineHeight: '1.4', maxWidth: '600px' }}>
        El mejor sabor de Ciudad Granja, directo a tu mesa.
      </p>
      
      {/* NOTA: Si esta imagen se ve rota, es porque en tu carpeta "public" no tienes un archivo llamado exactamente "ceviche-principal.jpg" */}
      <img 
        src="/ceviche-principal.jpg" 
        alt="Ceviche Especial" 
        style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.4)', marginTop: '10px' }} 
      />
      
      <a 
        href="https://wa.me/523311524607?text=Hola,%20me%20gustaría%20hacer%20un%20pedido." 
        target="_blank" 
        rel="noreferrer" 
        style={{ backgroundColor: '#D32F2F', color: 'white', padding: '16px 35px', textDecoration: 'none', borderRadius: '50px', fontSize: '1.3rem', fontWeight: 'bold', marginTop: '15px', display: 'inline-block' }}
      >
        🛵 Pide a Domicilio por WhatsApp
      </a>
    </section>
  );
}

export default Hero;