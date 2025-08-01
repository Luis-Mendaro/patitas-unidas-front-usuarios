import { Link } from "react-router";
import Badge from "../Badge";
import PetCard from "../PetCard";

function PetSection() {
  return (
    <section className="pets-section py-5">
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
          <div className="col">
            <PetCard />
          </div>
          <div className="col">
            <PetCard />
          </div>
          <div className="col">
            <Link to="/mascotas" className="text-decoration-none text-muted">
              <div className="h-100 d-flex flex-column align-items-center justify-content-center">
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
