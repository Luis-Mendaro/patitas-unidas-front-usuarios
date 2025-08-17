import { Link } from "react-router";
import "./NotFound.css"; // ← Crear este archivo CSS

function NotFound() {
  return (
    <div className="container text-center mt-5 mb-5 not-found-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Logo animado */}
          <div className="mb-4 bounce-animation">
            <img
              src="/paw.svg"
              alt="Patas Unidas logo"
              height="80"
              className="logo-404"
            />
          </div>

          <h1 className="display-1 fw-bold text-muted mb-3">404</h1>
          <h2 className="mb-4">¡Ups! Esta página se perdió</h2>
          <p className="lead text-muted mb-4">
            Como un cachorro travieso, se escapó y no podemos encontrarla.
          </p>

          <Link to="/" className="patas-btn patas-btn-primary patas-btn-lg">
            ¡Veni, no te vayas! <span> </span> Volve a casa
          </Link>

          <div className="mt-4">
            <Link to="/mascotas" className="patas-btn patas-btn-secondary me-2">
              Ver Mascotas
            </Link>
            <Link to="/refugios" className="patas-btn patas-btn-secondary">
              Ver Refugios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
