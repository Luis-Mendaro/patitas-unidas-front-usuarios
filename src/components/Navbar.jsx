import { Link, useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../config/redux/userSlice";
import { toast } from "react-toastify";

import "./Navbar.css";

import Button from "./Button";

function Navbar() {
  const token = useSelector((state) => state.user?.token);
  const user = useSelector((state) => state.user?.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    toast.info("Nos vemos la proxima 👋");
    navigate("/");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary py-3 border-bottom"
        style={{ backgroundColor: "#f9f8f6" }}
      >
        <div className="container">
          {/* Centro */}
          <div className="d-none d-lg-flex align-items-center gap-3 nav-center">
            <Link
              className={`text-decoration-none nav-link-anim ${
                location.pathname === "/mascotas"
                  ? "fs-4 patas-text-primary"
                  : "fs-5 patas-text-brown"
              }`}
              to="/mascotas"
            >
              Adoptar
            </Link>
            <Link
              className={`text-decoration-none nav-link-anim ${
                location.pathname === "/refugios"
                  ? "fs-4 patas-text-primary"
                  : "fs-5 patas-text-brown"
              }`}
              to="/refugios"
            >
              Refugios
            </Link>
            <Link
              className={`text-decoration-none nav-link-anim ${
                location.pathname === "/sobre-este-proyecto"
                  ? "fs-4 patas-text-primary"
                  : "fs-5 patas-text-brown"
              }`}
              to="/sobre-este-proyecto"
            >
              Sobre este Proyecto
            </Link>
          </div>
          <div className="w-100 d-flex justify-content-between">
            {/* Izquierda */}
            <div className="d-flex align-items-center">
              <div className="dropdown d-lg-none">
                <button
                  className="navbar-toggler border-0 px-0 me-3"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="dropdown-menu mt-2 pe-5">
                  <li>
                    <Link className="dropdown-item" to="/mascotas">
                      Adoptar
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/refugios">
                      Refugios
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sobre-este-proyecto">
                      Sobre Este Proyecto
                    </Link>
                  </li>
                </ul>
              </div>

              <Link
                to="/"
                className="navbar-brand d-flex align-items-center nav-link-anim"
              >
                <div className="shadow-img">
                  <img
                    src="/paw.svg"
                    alt="Patas Unidas logo"
                    height="30"
                    className="me-2"
                  />
                </div>
                <h1 className="fw-bold fs-2 m-0 d-none d-sm-block text-dark title-navbar">
                  <span className="rotate-letter-P">P</span>atitas
                  <span> </span>
                  <span className="letter-u">U</span>nidas
                </h1>
              </Link>
            </div>

            {/* Derecha*/}
            <div className="d-flex" id="contenido-derecha">
              <div className="d-flex align-items-center ms-auto d-sm-none me-2">
                {token ? (
                  <>
                    <Link className="nav-link" to="/lista/idLista">
                      <i className="bi bi-suit-heart-fill patas-text-gradient fs-2 me-3 heart-icon"></i>
                    </Link>

                    <div className="dropdown">
                      <img
                        src={user.profileImage}
                        alt={`${user.name} pfp`}
                        className="pfp"
                        role="button"
                        data-bs-toggle="dropdown"
                      />
                      <ul className="dropdown-menu dropdown-menu-end text-end">
                        <li>
                          <Link
                            className="dropdown-item fw-semibold"
                            to="/perfil"
                          >
                            Mi perfil
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/lista/idLista">
                            Mis Patitas
                          </Link>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={handleLogout}
                          >
                            Cerrar sesión
                          </button>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link className="nav-link" to="/iniciar-sesion">
                    <Button
                      text=""
                      large={false}
                      icon="bi-box-arrow-in-right"
                    />
                  </Link>
                )}
              </div>

              {/* Botones solo visibles en pantallas grandes */}
              <div className="d-none d-sm-flex ms-auto align-items-center">
                {token ? (
                  <>
                    <Link className="nav-link" to="/lista/idLista">
                      <i className="bi bi-suit-heart-fill patas-text-gradient fs-2 me-3 heart-icon"></i>
                    </Link>

                    <div className="dropdown">
                      <img
                        src={user.profileImage}
                        alt={`${user.name} pfp`}
                        className="pfp"
                        role="button"
                        data-bs-toggle="dropdown"
                      />
                      <ul className="dropdown-menu dropdown-menu-end text-end">
                        <li>
                          <Link
                            className="dropdown-item fw-semibold"
                            to="/perfil"
                          >
                            Mi perfil
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/lista/idLista">
                            Mis Patitas
                          </Link>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={handleLogout}
                          >
                            Cerrar sesión
                          </button>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link className="nav-link" to="/iniciar-sesion">
                    <Button text="Iniciar Sesión" large={false} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
