import React, { useState } from 'react';
import '../css/Reserva.css';
import mapaMesas from '../img/mapaMesas.png'; // Asegúrate que la ruta es correcta

const mesas = [
  { id: 1, top: 476, left: 100, horas: ['12:00', '13:00', '14:00'] },
  { id: 2, top: 332, left: 100, horas: ['12:30', '13:30', '15:00'] },
  { id: 3, top: 332, left: 315, horas: ['12:30', '13:30', '15:00'] },
];

const Reserva = () => {
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

  return (
    <div className="reserva-container">
      <img src={mapaMesas} alt="Mapa de mesas" className="plano" />

      {mesas.map((mesa) => (
        <div
          key={mesa.id}
          className="mesa"
          style={{ top: `${mesa.top}px`, left: `${mesa.left}px` }}
          onMouseEnter={() => setMesaSeleccionada(mesa)}
          onMouseLeave={() => setMesaSeleccionada(null)}
        >
          {mesaSeleccionada?.id === mesa.id && (
            <div className="horas-disponibles">
              <strong>Horas disponibles:</strong>
              <ul>
                {mesa.horas.map((hora, index) => (
                  <li key={index}>{hora}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Reserva;
