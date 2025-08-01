import Button from "./Button";
import "./LikedPet.css";

const LikedPet = ({ likedPet }) => {
  const petAgeMonths = likedPet.age % 12;
  const petAgeyears = (likedPet.age - petAgeMonths) / 12;
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
        <div className="col-md-8 card-body-container d-flex flex-column px-2">
          <div className="liked-Pet-Header mt-1 d-flex align-items-center ">
            <h5 className="card-title">{likedPet.name}</h5>
            <button className="btn rounded-circle heart-button">
              <i className="bi bi-x" />
            </button>
          </div>
          <div>
            <span className="petAge badge rounded-pill py-2 px-2 me-1">
              {petAgeyears > 0
                ? `${petAgeyears} años`
                : `${petAgeMonths} meses`}
            </span>

            <span className="petLocation badge rounded-pill py-2 px-2">
              Departamento del Refugio
            </span>
          </div>
          <p className="card-text mt-2 pet-description flex-grow-1">
            {likedPet.description}
          </p>
          <Button text="Adoptar" customClasses="align-self-start mb-1" />
          {/* <a href="#" className="btn btn px-4 mb-1 btn-Adopt align-self-start">
            Adoptar
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default LikedPet;
