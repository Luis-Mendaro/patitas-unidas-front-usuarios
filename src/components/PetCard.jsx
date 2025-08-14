import "./PetCard.css";

import { Link } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaDog, FaCat, FaPaw } from "react-icons/fa";

import { useApi } from "../hooks/useApi";
import constants from "../utils/constants";
import Button from "./Button";

function PetCard({ pet }) {
  const { monthsToYears } = constants;
  const { likePetRequest } = useApi();
  const loggedUserId = useSelector((state) => state.user?.user.id);
  const userLikedPets = useSelector((state) => state.user?.user.likedPet.pets);

  function getImageUrl(img) {
    const baseUrl = import.meta.env.VITE_SUPABASE;

    if (!img) {
      return "https://dummyimage.com/600x300/cccccc/555555&text=Imagen+no+disponible";
    }

    const isFullUrl = /^http(s)?:\/\//.test(img);
    return isFullUrl ? img : `${baseUrl}/PetImages/${img}`;
  }

  function handleLike() {
    if (loggedUserId) {
      likePetRequest(loggedUserId, pet.id);
      toast.success(`${pet.name} fue añadido a tus Patitas!❤️`);
    } else {
      toast.error("Inicie sesión para dar like");
    }
  }

  function handleUnLike() {
    if (
      window.confirm(
        `¿Estas seguro que deseas quitar a ${pet.name} de tus Patitas? 💔🥺`
      )
    ) {
      likePetRequest(loggedUserId, pet.id);
      toast.error(`${pet.name} se fue de tus Patitas 😿`);
    }
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

  return (
    pet && (
      <div className="petCard">
        <div className="petCardImageContainer">
          <Link to={`/mascotas/${pet.id}`} className="flex-fill">
            <img
              src={getImageUrl(pet.images?.[0])}
              alt={`Imagen Mascota ${pet.name}`}
            />
          </Link>

          <button
            className="btn rounded-circle heart-button"
            onClick={(e) => {
              e.stopPropagation();
              userLikedPets?.some((likedPet) => likedPet.id === pet.id)
                ? handleUnLike()
                : handleLike();
            }}
          >
            {userLikedPets?.some((likedPet) => likedPet.id === pet.id) ? (
              <i className="bi bi-suit-heart-fill petcard-heart" />
            ) : (
              <i className="bi bi-suit-heart" />
            )}
          </button>
        </div>

        <div className="card-body">
          <div>
            <div className="d-flex gap-2 justify-content-between">
              <h5 className="card-title">{pet.name}</h5>
              <div className="d-flex align-baseline fs-5">
                {speciesToIcon(pet.category.species)}
              </div>
            </div>
            <div>
              <span className="petAge badge rounded-pill py-2 px-2 me-1">
                {monthsToYears(pet.age)}
              </span>
              <span className="petAge badge rounded-pill py-2 px-2 me-1">
                {englishToSpanish(pet.sex)}
              </span>
              <span className="petAge badge rounded-pill py-2 px-2 me-1">
                {englishToSpanish(pet.size)}
              </span>
              <span className="petLocation badge rounded-pill py-2 px-2">
                {pet.shelterUser.location}
              </span>
            </div>
            <p className="card-text mt-3 text-truncate">{pet.description}</p>
          </div>

          <div className="d-flex justify-content-between gap-2 mt-3">
            <Link to={`/mascotas/${pet.id}`} className="flex-fill">
              <Button text="Ver Detalle" customClasses="w-100 btn-PetDetails" />
            </Link>
            {userLikedPets?.some((likedPet) => likedPet.id === pet.id) ? (
              ""
            ) : (
              <Link
                onClick={handleLike}
                className="flex-fill p-0 border-0 bg-transparent"
              >
                <Button
                  text="Me interesa"
                  icon="bi-heart-fill"
                  variant="secondary"
                  customClasses="w-100 btn-PetLike"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default PetCard;
