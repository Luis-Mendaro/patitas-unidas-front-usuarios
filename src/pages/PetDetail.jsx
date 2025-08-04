import { Link, useLocation } from "react-router";
import Button from "../components/Button.jsx";
import pets from "../data/pets.js";
import constants from "../utils/constants";
import { useLayoutEffect } from "react";
const { monthsToYears } = constants;

function PetDetail() {
  const { monthsToYears, scrollToTop } = constants;
  const petId = 1;
  const pet = pets.find((pet) => pet.id === petId);
  const location = useLocation();

  useLayoutEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  console.log(pet.age);
  return (
    <>
      <div className="vh-100">
        <div className="container pb-5">
          <div className="p-3">
            <Link to="/" className="text-decoration-none text-black">
              <i className="bi bi-arrow-left me-2"></i>
              <span>Volver a la lista</span>
            </Link>
          </div>
          <div className="row p-3">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <img
                className="rounded img-fluid w-100 shadow-lg"
                src={pet.images[1]}
                alt=""
              />
            </div>
            <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-baseline">
                  <h2 className="me-3 fw-bold">{pet.name} </h2>
                  <span className="fs-5 text-secondary">
                    {monthsToYears(pet.age)}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="me-4 patas-text-brown">
                    <i className="bi bi-house-door"></i> tShelterUser
                  </span>
                  <span className="patas-text-brown">
                    <i className="bi bi-geo-alt"></i>tShelterUser
                  </span>
                </div>
                <div
                  className="mb-4 border rounded p-3 pb-5"
                  style={{ backgroundColor: "#f7f5f3" }}
                >
                  <p>{pet.description}</p>
                </div>
                <div className="row mb-4">
                  <div
                    className="col border rounded mx-2 p-2 text-center"
                    style={{ backgroundColor: "#f7f5f3" }}
                  >
                    <div className="d-flex flex-column">
                      <span
                        className="fs-3 fw-bold"
                        style={{ color: "#e37036" }}
                      >
                        {pet.color}
                      </span>
                      <span>Color</span>
                    </div>
                  </div>
                  <div
                    className="col border rounded mx-2 p-2 text-center"
                    style={{ backgroundColor: "#f7f5f3" }}
                  >
                    <div className="d-flex flex-column">
                      <span
                        className="fs-3 fw-bold"
                        style={{ color: "#e37036" }}
                      >
                        {pet.sex}
                      </span>
                      <span>Sexo</span>
                    </div>
                  </div>
                  <div
                    className="col border rounded mx-2 p-2 text-center"
                    style={{ backgroundColor: "#f7f5f3" }}
                  >
                    <div className="d-flex flex-column">
                      <span
                        className="fs-3 fw-bold"
                        style={{ color: "#e37036" }}
                      >
                        {pet.size}
                      </span>
                      <span>Tamaño</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Button
                    text="Me interesa"
                    large={true}
                    icon="bi-heart-fill"
                    variant="secondary"
                    customClasses="w-100"
                  />
                </div>
                <div className="col">
                  <Link to={`/${pet.id}/formulario-adopcion`}>
                    <Button
                      text="Quiero adoptar"
                      large={true}
                      icon="bi-heart-fill"
                      customClasses="w-100"
                    />
                  </Link>
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
