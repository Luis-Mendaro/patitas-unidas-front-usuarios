import React from "react";
import "./ProfileUser.css";

const profileData = {
    name: "Nombre",
    email: "",
    role: "",
    location: "",
    phone: "",
    joined: "",
    avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    likedPets: [],

};

const ProfileUser = () => {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <img src={profileData.avatar} alt="Avatar" className="avatar" />
                <h2>{profileData.name}</h2>
                <hr />
                <p><strong>Email:</strong> {profileData.email}</p>
                <p><strong>miembro desde:</strong> {new Date(profileData.joined).toLocaleDateString()}</p>
                <ul>
                    {profileData.likedPets.map((pet, index) => (
                        <li key={index}>{pet}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProfileUser;