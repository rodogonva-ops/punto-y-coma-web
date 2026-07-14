import React from 'react';

// Tarjetas visuales de hasta arriba
const menuItems = [
  { id: 1, title: "Molcajetes Fríos y Calientes", img: "/molcajete.png", desc: "Camarón, pulpo, atún y mango bañados en nuestra salsa negra secreta." },
  { id: 2, title: "Cortes de Rib Eye", img: "/ribeye.png", desc: "300 gr de corte fino acompañado de complementos perfectos." },
  { id: 3, title: "Especialidades de Camarón", img: "/camarones.png", desc: "Empanizados, al coco, zarandeados o a la diabla. ¡Tú eliges!" }
];

// Componente reutilizable para cada platillo (Mantiene el código limpio y profesional)
const MenuItem = ({ name, price, desc }) => (
  <li style={{ padding: '15px 0', borderBottom: '1px dashed #E0E0E0', display: 'flex', flexDirection: 'column', gap: '5px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <span style={{ fontWeight: 'bold', color: '#002B49', flex: 1, paddingRight: '10px', fontSize: '1.1rem' }}>{name}</span>
      <span style={{ fontWeight: 'bold', color: '#B30000', fontSize: '1.1rem', whiteSpace: 'nowrap' }}>{price}</span>
    </div>
    {desc && <span style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>{desc}</span>}
  </li>
);

function Services() {
  return (
    <section id="menu" style={{ backgroundColor: '#F3F4F6', padding: '60px 20px', fontFamily: 'sans-serif' }}>
      
      {/* SECCIÓN VISUAL (Destacados) */}
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <h2 style={{ color: '#002B49', fontSize: '2.6rem', marginBottom: '10px', fontWeight: 'bold' }}>Nuestro Menú Destacado</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
          {menuItems.map(item => (
            <div key={item.id} style={{ backgroundColor: 'white', width: '320px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 6px 12px rgba(0,0,0,0.08)' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '25px', textAlign: 'left' }}>
                <h3 style={{ color: '#002B49', fontSize: '1.35rem', margin: '0 0 10px 0', fontWeight: '700' }}>{item.title}</h3>
                <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MENÚ DIGITAL (Optimizado para QR y Celulares) */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#002B49', fontSize: '2.6rem', margin: '0 0 10px 0', fontWeight: 'bold' }}>Menú Digital</h2>
        <p style={{ color: '#555', fontSize: '1.1rem', margin: '0' }}>Escanea, elige y pide directo a tu mesa o domicilio.</p>
      </div>

      {/* Contenedor Flex: En PC se ven 2 columnas, en celular 1 columna */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        
        {/* COLUMNA 1 */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* Ceviches */}
          <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#B30000', fontSize: '1.6rem', borderBottom: '2px solid #F3F4F6', paddingBottom: '10px', marginTop: 0 }}>Ceviches</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <MenuItem name="Pescado en Trozo" price="Med $90 / Orden $150" />
              <MenuItem name="De Camarón" price="Med $160 / Orden $220" desc="Cocido o en limón." />
              <MenuItem name="Ceviche Tropical" price="Med $180 / Orden $250" desc="Camarón, pulpo y atún." />
              <MenuItem name="Oleada Negra" price="Med $180 / Gde $250" desc="Camarón, pulpo, atún, picante." />
            </ul>
          </div>

          {/* Aguachiles */}
          <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#B30000', fontSize: '1.6rem', borderBottom: '2px solid #F3F4F6', paddingBottom: '10px', marginTop: 0 }}>Aguachiles</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <MenuItem name="Ceviche Oleada Negra" price="$180 / $250" />
              <MenuItem name="Lupita" price="$180 / $245" desc="Receta original de mariscos El Mocho de El Arenal Jalisco. Habanero, serrano, clamato, salsa negra, jitomate, pepino." />
              <MenuItem name="Verde Clásico" price="$180 / $245" />
              <MenuItem name="Negro Punto y Coma" price="$180 / $245" desc="Habanero, salsas negras." />
              <MenuItem name="Negro al Clamato / Mango / Tamarindo" price="$180 / $245" desc="Elige tu especialidad negra." />
              <MenuItem name="Rojo Chiltepín / Merlina (Chiltepín Negro)" price="$180 / $245" />
              <MenuItem name="Tiradito de Atún" price="$220" desc="Atún en láminas con nuestra exquisita salsa ponzu." />
            </ul>
          </div>

          {/* Molcajetes y Torres */}
          <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#B30000', fontSize: '1.6rem', borderBottom: '2px solid #F3F4F6', paddingBottom: '10px', marginTop: 0 }}>Molcajetes & Torres</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <MenuItem name="Molcajete Frío" price="$220 - $280" desc="Camarón crudo, cocido, pulpo, atún y mango en salsa oleada negra." />
              <MenuItem name="Molcajete Medina" price="$240 - $290" desc="Camarón crudo, cocido, pulpo y mango en salsa de aguachile negro." />
              <MenuItem name="Torre de Mariscos" price="$400 (Media: $310)" desc="Ceviche de pescado base, camarón limón/cocido, atún, callo, pulpo, coronada con chicharrón de pescado y camarón." />
            </ul>
          </div>

        </div>

        {/* COLUMNA 2 */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* Platillos de Camarón */}
          <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#B30000', fontSize: '1.6rem', borderBottom: '2px solid #F3F4F6', paddingBottom: '10px', marginTop: 0 }}>Platillos de Camarón</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <MenuItem name="Zarandeados" price="$250" />
              <MenuItem name="Emperador" price="$230" desc="Empanizados coronados con queso y tocino." />
              <MenuItem name="Filadelfia" price="5pzs $220 / 3pzs $150" desc="Empanizados con relleno de filadelfia." />
              <MenuItem name="Cucaracha" price="$220" desc="Guisado en salsa de aguachile negro con cáscara para pelar." />
              <MenuItem name="Combinado" price="$220" desc="Mitad a la diabla y mitad empanizados." />
              <MenuItem name="Punto y Coma" price="$220" desc="Con cáscara guisado en chile morita." />
              <MenuItem name="Momia / Momia Especiales" price="$220" desc="Envueltos en tocino coronados con queso cheddar o filadelfia." />
              <MenuItem name="Al Coco / Al Coco Especiales" price="$220 / $240" desc="Clásicos o rellenos de filadelfia." />
              <MenuItem name="Platón de la Casa / Momiadelfia" price="$240" desc="Las mejores combinaciones de empanizados, coco y filadelfia." />
              <MenuItem name="Clásicos" price="$200" desc="Diabla, Mojo de Ajo, Ajillo, Empanizado, Mantequilla." />
              <MenuItem name="Camarón con Pulpo (Al gusto)" price="$280" />
            </ul>
          </div>

          {/* Mariscadas */}
          <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#B30000', fontSize: '1.6rem', borderBottom: '2px solid #F3F4F6', paddingBottom: '10px', marginTop: 0 }}>Mariscadas (2, 3 o 4 Personas)</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <MenuItem name="Mariscada Caliente" price="$450 / $675 / $900" desc="Camarones coco, empanizados, filadelfia, zarandeado, punto y coma, con arroz, papas y ensalada." />
              <MenuItem name="Mariscada Fría" price="$450 / $675 / $900" desc="Camarón limón, cocido, pulpo y atún estilo tiradito en salsa oleada negra." />
            </ul>
          </div>

          {/* Filetes y Bebidas */}
          <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#B30000', fontSize: '1.6rem', borderBottom: '2px solid #F3F4F6', paddingBottom: '10px', marginTop: 0 }}>Filetes, Entradas y Bebidas</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <MenuItem name="Filete Punto y Coma / Emperador" price="$170 / $220" desc="Guisado en chile morita o Empanizado con relleno." />
              <MenuItem name="Tostada de Marlin" price="$75" />
              <MenuItem name="Refresco (355ml) / Limonada" price="$35 / $50" />
              <MenuItem name="Cerveza" price="$40" />
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;