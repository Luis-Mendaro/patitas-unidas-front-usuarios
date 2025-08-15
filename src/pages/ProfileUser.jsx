import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useApi } from "../hooks/useApi";
import { toast } from "react-toastify";
import "./profileUser.css";

const ProfileUser = () => {
  const { updateUserProfile } = useApi();

  const rootUser = useSelector((s) => s.user || s.user2 || null);
  const user = rootUser?.user ? rootUser.user : rootUser;

  const [isEditingFields, setIsEditingFields] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const fallbackAvatar = "/default-avatar.png";
  const currentAvatar =
    user?.profileImage || user?.avatar || rootUser?.avatar || fallbackAvatar;

  const [avatarPreview, setAvatarPreview] = useState(currentAvatar);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setAvatarPreview(currentAvatar);
    } }, [user]);

  if (!user)
    return (
      <div className="perfil-wrap">
        <p>Cargando perfil…</p>
      </div>
    );

  const userId =
    user?._id ||
    user?.id ||
    rootUser?._id ||
    rootUser?.id ||
    rootUser?.data?.user?._id ||
    "";

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleAvatarChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setAvatarPreview(objectUrl);

    try {
      setIsUploading(true);
      const base64 = await toBase64(file);
      await updateUserProfile(userId, { avatar: base64 });
      toast.success("Avatar actualizado");
    } catch (err) {
      console.error(err);
      toast.error("No se pudo actualizar el avatar");
      setAvatarPreview(currentAvatar);
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancelChanges = () => {
    setEmail(user.email || "");
    setName(user.name || "");
    setPassword("");
    setConfirmedPassword("");
    setIsEditingFields(false);
    setIsEditingPassword(false);
  };

  const showSaveCancelButtons = isEditingFields || isEditingPassword;

  const handleSave = async () => {
    const payload = {};
    if (isEditingFields && (name !== user.name || email !== user.email)) {
      payload.name = name;
      payload.email = email;
    }
    if (isEditingPassword) {
      if (!password || !confirmedPassword) {
        toast.error("Completá ambas contraseñas");
        return;
      }
      if (password !== confirmedPassword) {
        toast.error("Las contraseñas no coinciden");
        return;
      }
      payload.password = password;
    }

    if (Object.keys(payload).length === 0) {
      toast.error("No hay cambios para guardar");
      return;
    }

    try {
      await updateUserProfile(userId, payload);
      toast.success("Perfil actualizado");
      setIsEditingFields(false);
      setIsEditingPassword(false);
      setPassword("");
      setConfirmedPassword("");
    } catch (e) {
      console.error(e);
      toast.error("No se pudo actualizar el perfil");
    }
  };

  return (
    <div className="perfil-wrap">
      <div className="perfil-card">
        <div className="avatar-wrapper">
          <img
            src="https://thumbs.dreamstime.com/b/silueta-de-un-hombre-adulto-avatar-masculino-para-redes-sociales-invertida-gris-aislada-en-blanco-fondo-326822009.jpg"
            alt="Avatar"
            className={`avatar ${isUploading ? "avatar-loading" : ""}`}
          />
          <label
            className="avatar-plus-btn"
            title="Cambiar foto de perfil"
            aria-label="Cambiar foto de perfil"
          >
            +
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              hidden
            />
          </label>
        </div>

        <input
          type="text"
          className="input mb-12"
          placeholder="Jose Gervasio Artigas"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={!isEditingFields}
        />

        <input
          type="email"
          className="input mb-20"
          placeholder="gervasio@artigas.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isEditingFields}
        />

        {isEditingPassword && (
          <>
            <input
              type="password"
              className="input mb-12"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className="input mb-20"
              placeholder="Confirm password"
              value={confirmedPassword}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </>
        )}

        {!showSaveCancelButtons ? (
          <div className="links-vertical">
            <button
              className="link-action"
              onClick={() => setIsEditingFields(true)}
              type="button"
            >
              Editar perfil
            </button>
            <button
              className="link-action"
              onClick={() => setIsEditingPassword(true)}
              type="button"
            >
              Cambiar contraseña
            </button>
          </div>
        ) : (
          <div className="actions">
            <button
              className="btn btn-secondary"
              onClick={handleCancelChanges}
              type="button"
            >
              Cancelar
            </button>
            <button
              className="btn btn-primary"
              onClick={handleSave}
              type="button"
            >
              Guardar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileUser;
