import React from 'react';
import "../css/Register.css"


export const Register = () => {
  return (
    <div className="register-background">
      <div className="register-container">
        <div className="info-section">
          <h3>Localización</h3>
          <h1>Te esperamos</h1>

          <p><strong>Horario</strong><br />
            <span>De Martes a Domingo, de 8:00h a 23:00h.</span><br />
            <a href="#">Ver calendario de festivos</a>
          </p>

          <p><strong>Dirección</strong><br />
            Calle Cualquiera 123, Cualquier Lugar, <br />
            CP: 12345
          </p>

          <p><strong>Teléfono</strong><br />
            9.1234-5678
          </p>

          <p><strong>Email</strong><br />
            <a href="mailto:404HungerNotFood@gmail.com">404HungerNotFood@gmail.com</a>
          </p>

          <p><strong>Redes sociales</strong><br />
            <a href="#">@404HungerNotFood</a>
          </p>
        </div>

        <div className="form-section">
          <h1>Crea tu cuenta</h1>
          <input type="text" placeholder="Indica tu rut" />
          <input type="email" placeholder="Correo electronico" />
          <input type="text" placeholder="Escribe tu nombre" />
          <input type="password" placeholder="Ingresa tu contraseña" />
          <button>RESERVAR</button>
        </div>
      </div>

      <footer className="footer">
        404 Hunger Not Food · Política de privacidad
      </footer>
    </div>
  )
}

export default Register;
