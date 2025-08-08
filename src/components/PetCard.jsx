import { Link } from "react-router";
import "./PetCard.css";
import Button from "./Button";
import constants from "../utils/constants";
import { useSelector } from "react-redux";
import { useApi } from "../hooks/useApi";

function PetCard({ pet }) {
  const { monthsToYears } = constants;
  const { likePetRequest } = useApi();
  const loggedUserId = useSelector((state) => state.user?.user.id);
  const userLikedPets = useSelector((state) => state.user?.user.likedPet.pets);

  function handleLike() {
    likePetRequest(loggedUserId, pet.id);
  }

  return (
    pet && (
      <div className="petCard">
        <div className="petCardImageContainer">
          <img src={pet.images[0]} alt={`Imagen Mascota ${pet.name}`} />

          <button
            className="btn rounded-circle heart-button"
            onClick={handleLike}
          >
            {userLikedPets?.some((listItem) => listItem.id === pet.id) ? (
              <i className="bi bi-heart-fill petcard-heart" />
            ) : (
              <i className="bi bi-heart" />
            )}
          </button>

          <span className="badge rounded-pill py-2 pet-Category position-absolute">
            {pet.category.species}
          </span>
        </div>

        <div className="card-body">
          <div>
            <h5 className="card-title">{pet.name}</h5>
            <div>
              <span className="petAge badge rounded-pill py-2 px-2 me-1">
                {monthsToYears(pet.age)}
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
          </div>
        </div>
      </div>
    )
  );
}

export default PetCard;
