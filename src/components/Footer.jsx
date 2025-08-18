import { Link } from "react-router";

function Footer() {
  return (
    <>
      <footer className="bg-dark w-100 mt-auto">
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-sm-6 col-xl-3 px-4 mb-5 mb-xl-0">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/paw.svg"
                  alt="Patas Unidas logo"
                  height="25"
                  className="me-2"
                />
                <h5 className="fw-bold fs-3 m-0 text-white">Patitas Unidas</h5>
              </div>
              <p className="text-light mb-4">
                Somos una organización sin fines de lucro que rescata y protege
                mascotas en abandono, buscando para ellas un hogar lleno de
                amor.
              </p>
              <div className="text-light d-flex fs-5">
                <a href="https://www.facebook.com/" className="text-light">
                  <i className="bi bi-facebook me-3"></i>
                </a>
                <a href="https://www.instagram.com/" className="text-light">
                  <i className="bi bi-instagram me-3"></i>
                </a>
                <a href="https://www.twitter.com/" className="text-light">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3 px-4 mb-5 mb-xl-0">
              <h6 className="text-white fs-4 fw-semibold mb-3">Enlaces</h6>
              <ul className="list-unstyled">
                <Link
                  to="/mascotas"
                  className="text-decoration-none text-light opacity-75"
                >
                  <li className="mb-1">Adoptar</li>
                </Link>
                <Link
                  to="/refugios"
                  className="text-decoration-none text-light opacity-75"
                >
                  <li className="mb-1">Refugios</li>
                </Link>
                <Link
                  to="/sobre-este-proyecto"
                  className="text-decoration-none text-light opacity-75"
                >
                  <li className="mb-1">Sobre Este Proyecto</li>
                </Link>
              </ul>
            </div>
            {/*TODO: The following links in the footer are for pages that need to be developed in the future*/}
            <div className="col-12 col-sm-6 col-xl-3 px-4 mb-5 mb-xl-0">
              <h6 className="text-white fs-4 fw-semibold mb-3">Soporte</h6>
              <ul className="text-light list-unstyled opacity-75">
                <li className="mb-1">Cómo adoptar</li>
                <li className="mb-1">Políticas de adopción</li>
                <li className="mb-1">Preguntas frecuentes (FAQ)</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-xl-3 px-4 mb-5 mb-xl-0">
              <h6 className="text-white fs-4 fw-semibold mb-3">Contacto</h6>
              <ul className="text-light list-unstyled opacity-75">
                <li className="mb-1">Reportar un problema</li>
                <li className="mb-1">Formulario de contacto</li>
              </ul>
            </div>
          </div>
          <hr className="text-light" />
          <div className="d-flex justify-content-end">
            <p className="text-light m-0 pb-3 text-end">
              © 2025 Patitas Unidas. Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
