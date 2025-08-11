import "./profileUser.css";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useApi } from "../hooks/useApi";
import { toast } from "react-toastify";

const ProfileUser = () => {
  const [isEditingFields, setIsEditingFields] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const { user } = useSelector((state) => state.user);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const { updateUserProfile } = useApi()

  const handleCancelChanges = () => {
    setEmail(user.email)
    setName(user.name)
    setIsEditingFields(false);
    setIsEditingPassword(false);
  };

  const showSaveCancelButtons = isEditingFields || isEditingPassword;

  const handleSave = () => {
    if (name === user.name && email === user.email) {
      toast.error("No hay cambios para guardar");
    } else {
      updateUserProfile(user.id, { name, email })
    }
    setIsEditingFields(false)
  };

  return (
    user && (
      <div className="ProfileUser my-auto d-flex flex-column justify-content-center align-items-center">
        <div className="profile-card p-5 bg-body text-center rounded-4 my-5">
          <img
            src={user.profileImage}
            alt="Avatar"
            className="avatar rounded-circle mb-4"
          />

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditingFields}
            className="mb-3"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditingFields}
            className="mb-3"
          />

          {isEditingPassword && (
            <>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
            </>
          )}

          {!showSaveCancelButtons ? (
            <div className="links">
              <button
                className="link-btn p-0 small mt-3"
                onClick={() => setIsEditingFields(true)}
              >
                Editar campos
              </button>
              <button
                className="link-btn p-0 small"
                onClick={() => setIsEditingPassword(true)}
              >
                Cambiar contraseña
              </button>
            </div>
          ) : (
            <div className="action-buttons">
              <button
                className="patas-btn patas-btn-secondary"
                onClick={handleCancelChanges}
              >
                Cancelar
              </button>
              <button
                className="patas-btn patas-btn-primary"
                onClick={handleSave}
              >
                Guardar
              </button>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default ProfileUser;
