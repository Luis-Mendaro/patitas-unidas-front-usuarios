function FilterSideBar() {
  return (
    <>
      <div className="bg-white rounded p-4 mb-5">
        <p className="fs-4 fw-bold mb-3">Filtros</p>
        <div className="mb-5">
          <div className="mb-3">
            <p className="fs-5 fw-semibold m-0 mb-1">Tipo:</p>
            <div className="d-flex">
              <button className="btn btn-outline-dark me-1">Perro</button>
              <button className="btn btn-outline-dark me-1">Gato</button>
              <button className="btn btn-outline-dark">Otros</button>
            </div>
          </div>
          <div className="mb-3">
            <p className="fs-5 fw-semibold m-0 mb-1">Sexo:</p>
            <div className="d-flex">
              <button className="btn btn-outline-dark me-1">Femenino</button>
              <button className="btn btn-outline-dark">Masculino</button>
            </div>
          </div>
          <div className="mb-3">
            <p className="fs-5 fw-semibold m-0 mb-1">Tamaño:</p>
            <div className="d-flex">
              <button className="btn btn-outline-dark me-1">Perro</button>
              <button className="btn btn-outline-dark me-1">Perro</button>
              <button className="btn btn-outline-dark">Perro</button>
            </div>
          </div>
          <div className="mb-3">
            <p className="fs-5 fw-semibold m-0 mb-1">Edad:</p>
            <div className="d-flex justify-content-between px-4">
              <input type="range" class="form-range" id="customRange1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSideBar;
