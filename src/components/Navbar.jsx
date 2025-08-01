import { Link } from "react-router";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary py-3 border-bottom"
        style={{ backgroundColor: "#f9f8f6" }}
      >
        <div className="container">
          {/* Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src="/paw.svg"
              alt="Patas Unidas logo"
              height="32"
              className="me-2"
            />
            <h1 className="fw-bold fs-2 m-0">Patas Unidas</h1>
          </Link>

          {/* Botón Iniciar Sesión siempre visible (también en mobile) */}
          <div className="d-flex align-items-center ms-auto d-lg-none me-2">
            <Link className="nav-link" to="/lista/idLista">
              <i className="bi bi-heart-fill patas-text-primary fs-4 me-3"></i>
            </Link>
            <Link className="nav-link" to="/iniciar-sesion">
              <Button text="" large={false} icon="bi-box-arrow-in-right" />
            </Link>
          </div>

          {/* Toggler */}
          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenido colapsable */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold fs-5">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/mascotas">
                  Adoptar
                </Link>
              </li>
              <li className="nav-item mx-2">
                <a href="#how-it-works" className="nav-link">
                  Cómo Funciona
                </a>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/sobre-este-proyecto">
                  Sobre Este Proyecto
                </Link>
              </li>
            </ul>

            {/* Botones solo visibles en pantallas grandes */}
            <div className="d-none d-lg-flex ms-auto align-items-center">
              <Link className="nav-link" to="/lista/idLista">
                <i className="bi bi-heart-fill patas-text-primary fs-4 me-3"></i>
              </Link>
              <Link className="nav-link" to="/iniciar-sesion">
                <Button text="Iniciar Sesión" large={false} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
