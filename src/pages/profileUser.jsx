import { useState } from "react";
import "./profileUser.css";
import { useSelector } from "react-redux";

const ProfileUser = () => {
  const [editFields, setEditFields] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const user = useSelector((state) => state.user.user);

  const [nombre, setNombre] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  const cancelarCambios = () => {
    setEditFields(false);
    setEditPassword(false);
  };

  const mostrarGuardarCancelar = editFields || editPassword;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.profileImage} alt="Avatar" className="avatar" />

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
            <button className="cancelar" onClick={cancelarCambios}>
              Cancelar
            </button>
            <button className="guardar">Guardar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileUser;
