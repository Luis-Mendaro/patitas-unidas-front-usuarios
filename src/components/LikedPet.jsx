import { Link } from "react-router";
import constants from "../utils/constants";
import monthsToYears from "../utils/constants";
import Button from "./Button";
import "./LikedPet.css";

const LikedPet = ({ likedPet }) => {
  const { monthsToYears } = constants;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 pet-image-container ">
          <img
            src={likedPet.images[0]}
            className="img-fluid"
            alt={`Imagen de la mascota ${likedPet.name}`}
          />
          <span className="badge rounded-pill py-2 pet-Category">Gata</span>
        </div>
        <div className="col-md-8 card-body-container d-flex flex-column p-3">
          <div className="liked-Pet-Header mt-2 d-flex align-items-center ">
            <h5 className="card-title">{likedPet.name}</h5>
            <button className="btn bg-transparent rounded-circle delete-button">
              <i className="bi bi-x" />
            </button>
          </div>
          <div>
            <span className="petAge badge rounded-pill py-2 px-2 me-1">
              {monthsToYears(likedPet.age)}
            </span>

            <span className="petLocation badge rounded-pill py-2 px-2">
              Departamento del Refugio
            </span>
          </div>
          <p className="card-text mt-2 pet-description flex-grow-1">
            {likedPet.description}
          </p>
          <Link to={`/${likedPet.id}/formulario-adopcion`}>
            <Button text="Adoptar" customClasses="mb-1 btn-Adopt" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LikedPet;
