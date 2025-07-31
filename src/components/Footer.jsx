function Footer() {
  return (
    <>
      <footer className="bg-dark w-100">
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
                <h5 className="fw-bold fs-3 m-0 text-white">Patas Unidas</h5>
              </div>
              <p className="text-light mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                fuga, aliquid atque accusamus eum ex.
              </p>
              <div className="text-light d-flex fs-5">
                <i className="bi bi-facebook me-3"></i>
                <i className="bi bi-instagram me-3"></i>
                <i className="bi bi-twitter-x"></i>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3 px-4 mb-5 mb-xl-0">
              <h6 className="text-white fs-4 fw-semibold mb-3">Enlaces</h6>
              <ul className="text-light list-unstyled">
                <li className="mb-1">Adoptar</li>
                <li className="mb-1">Adoptar</li>
                <li className="mb-1">Adoptar</li>
                <li className="mb-1">Adoptar</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-xl-3 px-4 mb-5 mb-xl-0">
              <h6 className="text-white fs-4 fw-semibold mb-3">Soporte</h6>
              <ul className="text-light list-unstyled">
                <li className="mb-1">Adoptar</li>
                <li className="mb-1">Adoptar</li>
                <li className="mb-1">Adoptar</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-xl-3 px-4 mb-5 mb-xl-0">
              <h6 className="text-white fs-4 fw-semibold mb-3">Contacto</h6>
              <ul className="text-light list-unstyled">
                <li className="mb-1">Adoptar</li>
                <li className="mb-1">Adoptar</li>
              </ul>
            </div>
          </div>
          <hr className="text-light" />
          <p className="text-light m-0 pb-3 text-end">
            © 2025 Patas Unidas. Todos los derechos reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
