import { Link } from "react-router";
import "./PetCard.css";
import Button from "./Button";
const pets = [
  {
    id: 1,
    name: "Gracie",
    description:
      "Cado terminatio nesciunt charisma turba vilicus ultra. Arcesso video stipes. Quasi tempus cultellus.",
    images: [
      "https://avatars.githubusercontent.com/u/66886085",
      "https://avatars.githubusercontent.com/u/56163287",
      "https://avatars.githubusercontent.com/u/386034",
    ],
    sex: "female",
    size: "small",
    color: "rosa",
    age: "111",
    isAdopted: true,
    createdAt: "2025-07-30T14:01:16.000Z",
    updatedAt: "2025-07-30T14:01:16.000Z",
    categoryId: 2,
    shelterUserId: 5,
  },
];

const petAgeMonths = pets[0].age % 12;
const petAgeyears = (pets[0].age - petAgeMonths) / 12;

const PetCard = () => {
  return (
    <div>
      <div className="card petCard">
        <div className="petCardImageContainer">
          {/*replace the src from line 35's value with a url for the pet's image */}
          <img
            src="https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg"
            className="card-img-top"
            alt={`Imagen Mascota ${pets[0].name}`}
          />

          <button className="btn rounded-circle heart-button">
            <i className="bi bi-heart" />
          </button>
          {/*replace the text with fetched value for the categoryId of the pet */}
          <span className="badge rounded-pill py-2  pet-Category">Gata</span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{pets[0].name}</h5>
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
          <p className="card-text mt-3">{pets[0].description}</p>
          <div className="row">
            <div className="col p-1">
              <Link to="/mascotas/idMascota">
                <Button text="Ver Detalle" customClasses="w-100" />
              </Link>
            </div>
            <div className="col p-1">
              <Button
                text="Me interesa"
                icon="bi-heart-fill"
                variant="secondary"
                customClasses="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
