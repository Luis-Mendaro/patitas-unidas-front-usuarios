import "./ProfileUser.css";
import { useState } from "react";

const ProfileUser = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="profile-container">
            <div className="header">
                <button type="button" className="edit-btn">Editar</button>
            </div>

            <form className="profile-form" onSubmit={handleSubmit}>
                <div className="avatar">
                    <div className="avatar-circle">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Avatar por defecto" className="avatar-img" />
                    </div>
                </div>

                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                />

                <div className="guardar-container">
                    <button type="submit" className="save-btn">Guardar</button>
                </div>
            </form>
        </div>
    );
};

export default ProfileUser;