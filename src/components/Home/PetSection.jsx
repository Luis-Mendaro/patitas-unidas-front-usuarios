import { Link } from "react-router";
import Badge from "../Badge";
import PetCard from "../PetCard";
import { useSelector } from "react-redux";

function PetSection() {
  const pets = useSelector((state) => state.pets);
  return (
    <section className="pets-section pt-5">
      <div className="container">
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 text-muted">
            <Badge text="Historias de esperanza" icon="bi-heart-fill" />
          </div>
          <h2 className="fw-bold mb-3">
            Animales buscando
            <span className="patas-text-primary d-block">hogar</span>
          </h2>
          <p className="fs-5 text-muted text-center lead">
            Cada uno tiene una historia única y está esperando escribir un nuevo
            capítulo contigo. Dale una segunda oportunidad y recibe amor
            incondicional.
          </p>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <PetCard pet={pets[0]} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <PetCard pet={pets[1]} />
          </div>
          <div className="col-12 col-md-12 col-lg-4 d-flex justify-content-center">
            <Link to="/mascotas" className="text-decoration-none text-muted">
              <div
                className="d-flex flex-column align-items-center justify-content-center"
                style={{ width: "20rem", height: "100%", minHeight: "10rem" }}
              >
                <i className="bi bi-plus-circle fs-3"></i>
                <p>Ver todos los animales</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PetSection;
