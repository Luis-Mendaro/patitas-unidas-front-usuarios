import { Link } from "react-router";
import constants from "../utils/constants";
import Button from "./Button";
import "./LikedPet.css";
import { useDispatch, useSelector } from "react-redux";
import { useApi } from "../hooks/useApi";
import { FaDog, FaCat, FaPaw } from "react-icons/fa";
import { setSelectedPet } from "../config/redux/petsSlice";
import { toast } from "react-toastify";
import getImageUrl from "../utils/getImageUrl";
import ConfirmToast from "../components/ConfirmToast";

const LikedPet = ({ likedPet }) => {
  const { monthsToYears, determineBadgeText } = constants;
  const { likePetRequest } = useApi();
  const loggedUserId = useSelector((state) => state.user?.user.id);
  const userLikedPets = useSelector((state) => state.user?.user.likedPet.pets);
  const dispatch = useDispatch();

  function handleLike() {
    if (loggedUserId) {
      likePetRequest(loggedUserId, likedPet.id);
      toast.success(`${likedPet.name} fue añadido a tus Patitas!❤️`);
    } else {
      toast.error("Inicie sesión para dar like");
    }
  }

  function handleUnLike() {
    toast(
      <ConfirmToast
        text={`¿Estas seguro que deseas quitar a ${likedPet.name} de tus Patitas? 💔🥺`}
        onConfirm={() => {
          likePetRequest(loggedUserId, likedPet.id);
          setTimeout(() => {
            toast.error(`${likedPet.name} se fue de tus Patitas 😿`);
          }, 300);
        }}
        onCancel={() => toast.dismiss()}
      />,
      { autoClose: false, position: "top-right" }
    );
  }

  const speciesToIcon = (species) => {
    const values = {
      dog: <FaDog />,
      cat: <FaCat />,
      other: <FaPaw />,
    };

    return values[species];
  };

  const englishToSpanish = (value) => {
    const dictionary = {
      male: "Macho",
      female: "Hembra",
      small: "Chico",
      medium: "Mediano",
      large: "Grande",
    };

    return dictionary[value];
  };

  function selectPet() {
    dispatch(setSelectedPet(likedPet));
  }

  return (
    <div className="card mb-3 border-0 bg-body">
      <div className="row g-0">
        <div className="col-md-4 pet-image-container ">
          <img
            src={getImageUrl.getImageUrl(likedPet.images[0])}
            className="img-fluid"
            alt={`Imagen de la mascota ${likedPet.name}`}
          />
        </div>
        <div className="col-md-8 card-body-container d-flex flex-column p-3">
          <div className="mt-2 d-flex align-items-center">
            <h2 className="fw-bold d-flex align-items-baseline gap-2">
              {likedPet.name} {speciesToIcon(likedPet.category.species)}
            </h2>
            <button
              className="btn rounded-circle heart-button bg-transparent"
              onClick={() => {
                userLikedPets?.some((pet) => pet.id === likedPet.id)
                  ? handleUnLike()
                  : handleLike();
              }}
            >
              {userLikedPets?.some(
                (listItem) => listItem.id === likedPet.id
              ) ? (
                <i className="bi bi-suit-heart-fill petcard-heart" />
              ) : (
                <i className="bi bi-suit-heart" />
              )}
            </button>
          </div>
          <div className="d-flex gap-1 flex-wrap">
            <span className="petBadge badge rounded-pill py-2 px-2">
              {monthsToYears(likedPet.age)}
            </span>
            <span className="petBadge badge rounded-pill py-2 px-2">
              {englishToSpanish(likedPet.sex)}
            </span>
            <span className="petBadge badge rounded-pill py-2 px-2">
              {englishToSpanish(likedPet.size)}
            </span>
            <span className="petBadge badge rounded-pill py-2 px-2">
              {likedPet.shelterUser.location}
            </span>
          </div>
          <p className="card-text mt-2 pet-description flex-grow-1">
            {likedPet.description}
          </p>
          <Link to={`/${likedPet.id}/formulario-adopcion`} onClick={selectPet}>
            <Button text="Adoptar" customClasses="mb-1 btn-Adopt" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LikedPet;
