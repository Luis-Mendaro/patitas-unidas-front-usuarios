import { Link, useLocation, useParams } from "react-router";
import Button from "../components/Button.jsx";
import constants from "../utils/constants";
import { useEffect, useLayoutEffect, useState } from "react";
import BackButton from "../components/BackButton.jsx";
import { useSelector } from "react-redux";
import { useApi } from "../hooks/useApi.jsx";
import Badge from "../components/Badge.jsx";
import { FaDog, FaCat, FaPaw } from "react-icons/fa";

function PetDetail() {
  const location = useLocation();
  const { monthsToYears, scrollToTop } = constants;
  const { petId } = useParams();
  const id = Number(petId);

  const { fetchPetById } = useApi();

  const pets = useSelector((state) => state.pets?.items) ?? [];
  const petInStore = pets.find((p) => p.id === id);

  const [pet, setPet] = useState(null);

  const currentPet = petInStore ?? pet;

  useLayoutEffect(() => {
    scrollToTop();
  }, [location.pathname, scrollToTop]);

  useEffect(() => {
    if (!petInStore) {
      const getPet = async () => {
        const pet = await fetchPetById(id);
        setPet(pet);
      };
      getPet();
    }
  }, [petId, petInStore]);

  const speciesToIcon = (species) => {
    const values = {
      dog: <FaDog />,
      cat: <FaCat />,
      other: <FaPaw />,
    };

    return values[species];
  };

  if (!currentPet) return null;
  return (
    <>
      <div className="mb-5">
        <div className="container mb-5">
          <BackButton to="/mascotas" text="Volver a Mascotas" />
          <div className="py-4 px-4 bg-white rounded border">
            <div className="row">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <img
                  className="rounded img-fluid w-100"
                  src={currentPet.images[0]}
                  alt=""
                  style={{ objectFit: "cover", height: "500px" }}
                />
              </div>
              <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-end gap-3">
                    <h2 className="fw-bold m-0">{currentPet.name} </h2>
                    <div className="fs-2">
                      {speciesToIcon(currentPet.category.species)}
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="me-3 patas-text-brown">
                      <i className="bi bi-house-door me-1"></i>{" "}
                      {currentPet.shelterUser.name}
                    </span>
                    <span className="patas-text-brown">
                      <i className="bi bi-geo-alt me-1"></i>
                      {`${currentPet.shelterUser.location}, Uruguay`}
                    </span>
                  </div>
                  <div className="d-flex gap-1">
                    <Badge text={monthsToYears(currentPet.age)} />
                    <Badge text={currentPet.sex} />
                    <Badge text={currentPet.size} />
                    <Badge text={currentPet.color} />
                  </div>
                  <div className="mb-5">
                    <p>{currentPet.description}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Link to={`/refugios`}>
                      <Button
                        text="Me interesa"
                        large={true}
                        icon="bi-heart-fill"
                        variant="secondary"
                        customClasses="w-100"
                      />
                    </Link>
                  </div>
                  <div className="col">
                    <Link to={`/${currentPet.id}/formulario-adopcion`}>
                      <Button
                        text="Quiero adoptar"
                        large={true}
                        customClasses="w-100"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PetDetail;
