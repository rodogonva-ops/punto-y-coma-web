import React from 'react';

function Hero() {
  return (
    <section style={{ 
      backgroundColor: '#002B49', 
      color: 'white', 
      padding: '80px 20px', 
      textAlign: 'center', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '20px',
      fontFamily: 'sans-serif'
    }}>
      
      {/* Logo del tiburón */}
      <img 
        src="/favicon.png" 
        alt="Punto y Coma Logo" 
        style={{ width: '130px', height: '130px', borderRadius: '50%', border: '3px solid white', objectFit: 'cover' }} 
      />
      
      {/* Título sin amontonarse */}
      <h1 style={{ 
        fontSize: '3.2rem', 
        margin: '10px 0 0 0', 
        fontWeight: '800', 
        lineHeight: '1.2',
        letterSpacing: '0.5px'
      }}>
        Punto y Coma Camarón
      </h1>
      
      {/* Subtítulo */}
      <p style={{ 
        fontSize: '1.4rem', 
        color: '#88C6FF', 
        margin: '0 auto', 
        lineHeight: '1.5', 
        maxWidth: '600px',
        fontWeight: '400'
      }}>
        El mejor sabor de Ciudad Granja, directo a tu mesa.
      </p>
      
      {/* Imagen Principal en PNG */}
      <img 
        src="/ceviche-principal.png" 
        alt="Ceviche Especial" 
        style={{ 
          width: '100%', 
          maxWidth: '500px', 
          height: 'auto', 
          borderRadius: '15px', 
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)', 
          marginTop: '15px' 
        }} 
      />
      
      {/* Botón de WhatsApp Rojo */}
      <a 
        href="https://wa.me/523311524607?text=Hola,%20vengo%20de%20su%20sitio%20web%20y%20me%20gustaría%20hacer%20un%20pedido." 
        target="_blank" 
        rel="noreferrer" 
        style={{ 
          backgroundColor: '#B30000', 
          color: 'white', 
          padding: '16px 35px', 
          textDecoration: 'none', 
          borderRadius: '50px', 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          marginTop: '15px', 
          display: 'inline-block',
          boxShadow: '0 4px 15px rgba(179, 0, 0, 0.4)'
        }}
      >
        🛵 Pide a Domicilio por WhatsApp
      </a>
    </section>
  );
}

export default Hero;