import { Link } from "react-router";
import "./NotFound.css"; // ← Crear este archivo CSS

function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center container text-center my-5 not-found-container">
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
          <h2>¡Ups!</h2>
          <h4 className="mb-4">Parece que esta página no existe.</h4>

          <div className="mt-4">
            <Link to="/" className="patas-btn patas-btn-secondary me-2">
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
