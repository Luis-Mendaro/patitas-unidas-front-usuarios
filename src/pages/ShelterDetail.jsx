import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";

import Button from "../components/Button";
import BackButton from "../components/BackButton";
import PetCard from "../components/PetCard";

import { useApi } from "../hooks/useApi";
import { FaEnvelope, FaMailBulk } from "react-icons/fa";

function ShelterDetail() {
  const { id } = useParams();
  const { getShelterById } = useApi()
  const [shelter, setShelter] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getShelterById(id)
      setShelter(response.data.shelter)
    }
    fetchData()
  }, [id])

  return shelter && (
    <main className="container">
      <BackButton text="Volver al inicio" to="/" />

      <div className="bg-body p-4 rounded-1">
        <div className="row">
          <div className="col-lg-6">
            <div className="position-relative rounded-1 overflow-hidden">
              <img
                src={shelter.images[0]}
                alt={`Imagen de ${shelter.name}`}
                className="w-100 object-fit-cover"
                style={{ height: "500px" }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100" />
            </div>
            {/* <div className="row g-3">
              {shelter.images.slice(1).map((image, index) => (
                <div key={index} className="col-6">
                  <div className="rounded overflow-hidden">
                    <img
                      src={image}
                      alt={`Imagen ${index + 2} de ${shelter.name}`}
                      className="w-100 object-fit-cover"
                      style={{ height: "130px" }}
                    />
                  </div>
                </div>
              ))}
            </div> */}
          </div>
          <div className="col-lg-6">
            <div className="h-100 d-flex flex-column justify-content-between">
              <h2 className="fw-bold m-0"> {shelter.name}</h2>
              <div className="d-flex align-items-center gap-3 text-secondary mb-3">
                <span className="d-flex align-items-center gap-2">
                  <i className="bi bi-calendar"></i>
                  Fecha de creación: {new Date(shelter.createdAt).toLocaleDateString("es-UY")}
                </span>
              </div>
              <div className="d-flex align-items-center gap-2 text-secondary mb-4">
                <i className="bi bi-geo-alt"></i>
                Ubicación: {shelter.location}
              </div>
              <div className="d-flex align-items-center gap-3 mb-4">
                <span className="fw-semibold text-dark">Redes:</span>
                <div className="d-flex gap-2">
                  <div className="rounded d-flex align-items-center justify-content-center border border-2 px-2 py-1 ">
                    <i className="bi bi-twitter-x"></i>
                  </div>
                  <div className="rounded d-flex align-items-center justify-content-center border border-2 px-2 py-1 ">
                    <i className="bi bi-facebook"></i>
                  </div>
                  <div className="rounded d-flex align-items-center justify-content-center border border-2 px-2 py-1 ">
                    <i className="bi bi-instagram"></i>
                  </div>
                </div>
              </div>
              <div className="flex-grow-1">
                <div className="card mb-4 overflow-hidden rounded-0 border-0">
                  <div className="card-body p-0">
                    <h5 className="card-title fw-semibold">Descripción</h5>
                    <p className="card-text text-secondary">
                      {shelter.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* shelter.email */}
              <a href={`mailto:${shelter.email}`} className="patas-btn patas-btn-primary w-100"> <FaEnvelope /> Contactar</a>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 fw-bold">Mascotas</h2>
        </div>
        <div className="row g-3">
          {shelter.pets.map((animal) => (
            <div key={animal.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <PetCard pet={animal} key={animal.id} />
            </div>
          ))}
        </div>
      </section>

      <section className="my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 fw-bold">Productos</h2>
          {/* <Link to="/mascotas"><Button variant="secondary" text="Ver todos" /></Link> */}
        </div>
        <div className="row g-3">
          {shelter.products.slice(0, 5).map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-2">
              <div
                className="bg-light rounded d-flex align-items-center justify-content-center"
                style={{ aspectRatio: "1 / 1" }}
              >
                <div className="text-center p-3">
                  <p className="text-dark small fw-medium mb-0">
                    {product.name}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-6 col-md-4 col-lg-2">
            <Link to="/">
              <div
                className="bg-light rounded d-flex align-items-center justify-content-center"
                style={{ aspectRatio: "1 / 1" }}
              >
                <div className="text-center p-3">
                  <p className="text-dark small fw-medium mb-0">
                    Ver más.
                  </p>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

export default ShelterDetail;
