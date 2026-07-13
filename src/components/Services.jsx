import React from 'react';

// Platillos destacados con imágenes en .png
const menuItems = [
  { 
    id: 1, 
    title: "Molcajetes Fríos y Calientes", 
    img: "/molcajete.png", 
    desc: "Camarón, pulpo, atún y mango bañados en nuestra salsa negra secreta." 
  },
  { 
    id: 2, 
    title: "Cortes de Rib Eye", 
    img: "/ribeye.png", 
    desc: "300 gr de corte fino acompañado de complementos perfectos." 
  },
  { 
    id: 3, 
    title: "Especialidades de Camarón", 
    img: "/camarones.png", 
    desc: "Empanizados, al coco, zarandeados o a la diabla. ¡Tú eliges!" 
  }
];

function Services() {
  return (
    <section style={{ backgroundColor: '#F3F4F6', padding: '60px 20px', fontFamily: 'sans-serif' }}>
      
      {/* 1. SECCIÓN DE TARJETAS VISUALES */}
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <h2 style={{ color: '#002B49', fontSize: '2.6rem', marginBottom: '10px', fontWeight: 'bold' }}>
          Nuestro Menú Destacado
        </h2>
        <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '40px' }}>
          Especialidades preparadas al momento con ingredientes frescos.
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          {menuItems.map(item => (
            <div key={item.id} style={{ 
              backgroundColor: 'white', 
              width: '320px', 
              borderRadius: '15px', 
              overflow: 'hidden', 
              boxShadow: '0 6px 12px rgba(0,0,0,0.08)'
            }}>
              <img 
                src={item.img} 
                alt={item.title} 
                style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '25px', textAlign: 'left' }}>
                <h3 style={{ color: '#002B49', fontSize: '1.35rem', margin: '0 0 10px 0', fontWeight: '700' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. SECCIÓN DEL MENÚ EN TEXTO DETALLADO */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#002B49', fontSize: '2.6rem', margin: '0 0 10px 0', fontWeight: 'bold' }}>
          Nuestra Carta Completa
        </h2>
        <p style={{ color: '#555', fontSize: '1.2rem', margin: '0' }}>Precios y detalles de todo nuestro menú.</p>
      </div>

      <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* Categoría: Ceviches */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#B30000', fontSize: '1.6rem', borderBottom: '2px solid #F3F4F6', paddingBottom: '10px', marginBottom: '15px', marginTop: 0, fontWeight: '700' }}>
            Ceviches
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.05rem', color: '#333' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px dashed #E0E0E0' }}>
              <span><strong>Ceviche de Camarón</strong> (Cocido o en Limón)</span>
              <span style={{ fontWeight: 'bold', color: '#002B49' }}>Med $160 / Gde $220</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px dashed #E0E0E0' }}>
              <span><strong>Ceviche Tropical</strong> (Camarón, Pulpo y Atún)</span>
              <span style={{ fontWeight: 'bold', color: '#002B49' }}>Med $180 / Gde $250</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
              <span><strong>Oleada Negra</strong> (Camarón, Pulpo, Atún, Picante)</span>
              <span style={{ fontWeight: 'bold', color: '#002B49' }}>Med $180 / Gde $250</span>
            </li>
          </ul>
        </div>

        {/* Categoría: Aguachiles */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#B30000', fontSize: '1.6rem', borderBottom: '2px solid #F3F4F6', paddingBottom: '10px', marginBottom: '15px', marginTop: 0, fontWeight: '700' }}>
            Aguachiles
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.05rem', color: '#333' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px dashed #E0E0E0' }}>
              <span><strong>Verde Clásico</strong></span>
              <span style={{ fontWeight: 'bold', color: '#002B49' }}>Med $180 / Gde $245</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px dashed #E0E0E0' }}>
              <span><strong>Negro Punto y Coma</strong> (Habanero y Salsas Negras)</span>
              <span style={{ fontWeight: 'bold', color: '#002B49' }}>Med $180 / Gde $245</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
              <span><strong>Rojo Chiltepín</strong></span>
              <span style={{ fontWeight: 'bold', color: '#002B49' }}>Med $180 / Gde $245</span>
            </li>
          </ul>
        </div>

        {/* Categoría: Platillos de Camarón */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#B30000', fontSize: '1.6rem', borderBottom: '2px solid #F3F4F6', paddingBottom: '10px', marginBottom: '15px', marginTop: 0, fontWeight: '700' }}>
            Platillos de Camarón
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.05rem', color: '#333' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px dashed #E0E0E0' }}>
              <span><strong>Camarones Zarandeados</strong></span>
              <span style={{ fontWeight: 'bold', color: '#002B49' }}>$250</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px dashed #E0E0E0' }}>
              <span><strong>Camarones Emperador</strong> (Empanizados con queso y tocino)</span>
              <span style={{ fontWeight: 'bold', color: '#002B49' }}>$230</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
              <span><strong>Camarones al Coco</strong></span>
              <span style={{ fontWeight: 'bold', color: '#002B49' }}>$220</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Services;