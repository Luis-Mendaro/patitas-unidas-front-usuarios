import { useParams } from "react-router";
import { useState, useEffect } from "react";

import Button from "../components/Button";
import BackButton from "../components/BackButton";
import PetCard from "../components/PetCard";

import { useApi } from "../hooks/useApi";

function ShelterDetail() {
  const { id } = useParams();
  const { getShelterById } = useApi();
  const [shelter, setShelter] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const response = await getShelterById(id);
      if (mounted) setShelter(response?.data?.shelter);
    })();
    return () => {
      mounted = false;
    };
  }, [id, getShelterById]);

  if (!shelter) return null;

  return (
    <main className="container">
      <BackButton text="Volver al inicio" to="/" />

      <div className="row g-5">
        <div className="col-lg-6">
          <div className="position-relative rounded overflow-hidden shadow mb-4">
            <img
              src={shelter.images?.[0]}
              alt={`Imagen de ${shelter.name}`}
              className="w-100"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100" />
          </div>

          {/* 
          // Si algún día querés mostrar miniaturas adicionales, descomentá este bloque:
          <div className="row g-3">
            {shelter.images?.slice(1).map((image, index) => (
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
          </div>
          */}
        </div>

        <div className="col-lg-6">
          <div className="h-100 d-flex flex-column">
            <h1 className="display-5 mb-3 fw-bolder">{shelter.name}</h1>

            <div className="d-flex align-items-center gap-3 text-secondary mb-3">
              <span className="d-flex align-items-center gap-2">
                <i className="bi bi-calendar"></i>
                Fecha de creación:{" "}
                {new Date(shelter.createdAt).toLocaleDateString("es-UY")}
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
              <div className="card mb-4 overflow-hidden">
                <div className="card-body pb-3">
                  <h5 className="card-title fw-semibold">Descripción</h5>
                  <p className="card-text text-secondary">
                    {shelter.description}
                  </p>
                </div>
              </div>
            </div>

            <Button
              text="Contactar"
              icon="bi-telephone-fill"
              large={true}
              customClasses="w-100"
            />
          </div>
        </div>
      </div>

      <section className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 fw-bold">Mascotas</h2>
        </div>
        <div className="row g-3 mb-5">
          {shelter.pets?.map((animal) => (
            <div key={animal.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <PetCard pet={animal} />
            </div>
          ))}
        </div>
      </section>

      {/*  ======= SECCIÓN DE PRODUCTOS — OCULTA =======

      <section className="my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 fw-bold">Productos</h2>
        </div>

        <div className="row g-3">
          {shelter.products?.slice(0, 5).map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-2">
              <div
                className="bg-light rounded d-flex align-items-center justify-content-center"
                style={{ aspectRatio: "1 / 1" }}
              >
                <div className="text-center p-3">
                  <p className="text-dark small fw-medium mb-0">{product.name}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-6 col-md-4 col-lg-2">
            <a href="/">
              <div
                className="bg-light rounded d-flex align-items-center justify-content-center"
                style={{ aspectRatio: "1 / 1" }}
              >
                <div className="text-center p-3">
                  <p className="text-dark small fw-medium mb-0">Ver más.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      */}

      {/******* ESPACIO PARA SEPARARLO DE FOOTER *******/}
    </main>
  );
}

export default ShelterDetail;
