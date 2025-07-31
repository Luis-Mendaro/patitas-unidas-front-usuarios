import { Link } from "react-router";

function AdoptionForm() {
  return (
    <>
      <Link
        to="/"
        className="mt-3 mx-5 text-black d-inline-flex align-items-center gap-1 text-decoration-none"
        style={{
          maxWidth: "600px",
          cursor: "pointer",
          userSelect: "none",
          fontSize: "1rem",
        }}
      >
        <span className="fw-bold ">← Volver</span>
      </Link>
      <div className="container d-flex justify-content-center mt-5 mb-5">
        <div
          className="card rounded shadow p-4"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <h2 className="mb-4 text-center">Quiero Adoptar</h2>
          <div
            className="d-flex justify-content-center gap-3 p-3 mb-5 rounded shadow"
            style={{
              border: "1px solid #ccc",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            <img
              src="/img/refugio2.jpg"
              alt="Animal 1"
              className="img-fluid rounded"
              style={{ maxHeight: "250px", width: "33%", objectFit: "contain" }}
            />
            <img
              src="/img/refugio1.jpg"
              alt="Animal 2"
              className="img-fluid rounded"
              style={{ maxHeight: "250px", width: "33%", objectFit: "contain" }}
            />
            <img
              src="/img/refugio.jpg"
              alt="Animal 3"
              className="img-fluid rounded"
              style={{ maxHeight: "250px", width: "33%", objectFit: "contain" }}
            />
          </div>

          <form>
            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Mail@mail.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                type="text"
                className="form-control"
                placeholder="099 123 456"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Departameto</label>
              <input
                type="text"
                className="form-control"
                placeholder="Localidad"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">¿Por qué quieres adoptar?</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Escribe aquí tu motivo..."
              />
            </div>
            <div className="text-end">
              <button type="button" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdoptionForm;
