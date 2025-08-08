import React, { useState } from 'react';
import './profileUser.css';

const ProfileUser = () => {
  const [editFields, setEditFields] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const [nombre, setNombre] = useState("Jose Gervasio Artigas");
  const [email, setEmail] = useState("artigas764@gmail.com");
  const [password, setPassword] = useState("");

  const cancelarCambios = () => {
    setEditFields(false);
    setEditPassword(false);
  };

  const mostrarGuardarCancelar = editFields || editPassword;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="Avatar"
          className="avatar"
        />

        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          disabled={!editFields}
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!editFields}
        />

        {editPassword && (
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}

        {!mostrarGuardarCancelar ? (
          <div className="links">
            <button className="link-btn" onClick={() => setEditFields(true)}>
              Editar campos
            </button>
            <button className="link-btn" onClick={() => setEditPassword(true)}>
              Cambiar Contraseña
            </button>
          </div>
        ) : (
          <div className="action-buttons">
            <button className="cancelar" onClick={cancelarCambios}>Cancelar</button>
            <button className="guardar">Guardar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileUser;