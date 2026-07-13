import React from 'react';

const menuItems = [
  { 
    id: 1, 
    title: "Molcajetes Fríos y Calientes", 
    img: "/molcajete.jpg", 
    desc: "Camarón, pulpo, atún y mango bañados en nuestra salsa negra secreta." 
  },
  { 
    id: 2, 
    title: "Cortes de Rib Eye", 
    img: "/ribeye.jpg", 
    desc: "300 gr de corte fino acompañado de complementos perfectos." 
  },
  { 
    id: 3, 
    title: "Especialidades de Camarón", 
    img: "/camarones.jpg", 
    desc: "Empanizados, al coco, zarandeados o a la diabla. ¡Tú eliges!" 
  }
];

function Services() {
  return (
    <section style={{ backgroundColor: '#F3F4F6', padding: '60px 20px', textAlign: 'center' }}>
      <h2 style={{ color: '#003B73', fontSize: '2.5rem', marginBottom: '40px', fontWeight: 'bold' }}>
        Nuestro Menú Destacado
      </h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {menuItems.map(item => (
          <div key={item.id} style={{ backgroundColor: 'white', width: '320px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 6px 12px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}>
            <img 
              src={item.img} 
              alt={item.title} 
              style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
            />
            <div style={{ padding: '25px' }}>
              <h3 style={{ color: '#003B73', fontSize: '1.4rem', margin: '0 0 10px 0' }}>
                {item.title}
              </h3>
              <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.5' }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;