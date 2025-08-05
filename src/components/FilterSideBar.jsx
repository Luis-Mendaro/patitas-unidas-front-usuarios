import "./FilterSideBar.css";

import { useState } from "react";

import {
  typeFilters,
  sizeFilters,
  sexFilters,
  departamentosUruguay,
} from "../data/filterData";

function FilterSideBar() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [collapsed, setCollapsed] = useState({
    type: false,
    size: false,
    sex: false,
    age: false,
    location: false,
  });
  const [typeFilter, setTypeFilter] = useState(null);
  const [sizeFilter, setSizeFilter] = useState(null);
  const [sexFilter, setSexFilter] = useState(null);
  const [ageFilter, setAgeFilter] = useState(["", ""]);
  const [location, setLocation] = useState("");

  const toggleCollapse = (section) => {
    setCollapsed((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilters = () => {
    setTypeFilter(null);
    setSizeFilter(null);
    setSexFilter(null);
    setAgeFilter(["", ""]);
    setLocation("");
  };

  const isAgeValid =
    ageFilter[0] === "" ||
    ageFilter[1] === "" ||
    Number(ageFilter[0]) <= Number(ageFilter[1]);

  return (
    <>
      <div
        className="sidebar bg-white rounded p-3 mb-5 mb-auto border position-sticky"
        style={{
          width: showSidebar ? "300px" : "50px",
          top: "1rem",
          backgroundColor: "#f9f8f6",
        }}
      >
        <div
          className={`d-flex align-items-center ${showSidebar ? "mb-3" : ""} `}
        >
          {showSidebar && <p className="fs-4 fw-bold m-0">Filtros</p>}
          <i
            className={`bi ${
              showSidebar ? "bi-arrows-angle-contract" : "bi-filter fw-bold"
            } icon fs-6 ms-auto`}
            onClick={() => setShowSidebar(!showSidebar)}
          ></i>
        </div>

        <div
          className={`mb-5 ${showSidebar ? "" : "d-none"}`}
          id="filter-content"
        >
          <div className={`${collapsed.type ? "" : "mb-3"}`}>
            <div className={`d-flex justify-content-between mb-2`}>
              <span className="fw-semibold">Tipo:</span>
              <i
                className={`bi ${
                  collapsed.type ? "bi-chevron-up" : "bi-chevron-down"
                } icon`}
                onClick={() => toggleCollapse("type")}
              />
            </div>
            {!collapsed.type && (
              <div className="d-flex justify-content-evenly">
                {typeFilters.map((filter) => {
                  return (
                    <button
                      key={filter.value}
                      className={`filter-btn ${
                        typeFilter === filter.value ? "selected" : ""
                      }`}
                      onClick={() =>
                        setTypeFilter(
                          typeFilter === filter.value ? null : filter.value
                        )
                      }
                    >
                      <img src={filter.icon} alt={filter.label} height="40" />
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <div className={`${collapsed.size ? "" : "mb-3"}`}>
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-semibold">Tamaño:</span>
              <i
                className={`bi ${
                  collapsed.size ? "bi-chevron-up" : "bi-chevron-down"
                } icon`}
                onClick={() => toggleCollapse("size")}
              />
            </div>
            {!collapsed.size && (
              <div>
                {sizeFilters.map((filter) => {
                  return (
                    <button
                      key={filter.value}
                      className={`filter-btn-text w-100 mb-1 ${
                        sizeFilter === filter.value ? "selected" : ""
                      }`}
                      onClick={() =>
                        setSizeFilter(
                          sizeFilter === filter.value ? null : filter.value
                        )
                      }
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <div className={`${collapsed.sex ? "" : "mb-3"}`}>
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-semibold">Sexo:</span>
              <i
                className={`bi ${
                  collapsed.sex ? "bi-chevron-up" : "bi-chevron-down"
                } icon`}
                onClick={() => toggleCollapse("sex")}
              />
            </div>

            {!collapsed.sex && (
              <div>
                {sexFilters.map((filter) => {
                  return (
                    <button
                      key={filter.value}
                      className={`filter-btn-text w-100 mb-1 ${
                        sexFilter === filter.value ? "selected" : ""
                      }`}
                      onClick={() =>
                        setSexFilter(
                          sexFilter === filter.value ? null : filter.value
                        )
                      }
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <div className={`${collapsed.age ? "" : "mb-3"}`}>
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-semibold">Edad:</span>
              <i
                className={`bi ${
                  collapsed.age ? "bi-chevron-up" : "bi-chevron-down"
                } icon`}
                onClick={() => toggleCollapse("age")}
              />
            </div>

            {!collapsed.age && (
              <div className="row">
                <div className="col-6">
                  <input
                    type="number"
                    min="0"
                    className={`form-control text-center ${
                      !isAgeValid ? "is-invalid" : ""
                    }`}
                    placeholder="Mayor a"
                    value={ageFilter[0]}
                    onChange={(e) => {
                      setAgeFilter([e.target.value, ageFilter[1]]);
                    }}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="number"
                    min="0"
                    className={`form-control text-center ${
                      !isAgeValid ? "is-invalid" : ""
                    }`}
                    placeholder="Menor a"
                    value={ageFilter[1]}
                    onChange={(e) => {
                      setAgeFilter([ageFilter[0], e.target.value]);
                    }}
                  />
                </div>
                {!isAgeValid && (
                  <div className="text-danger mt-2 small text-center">
                    La edad mínima no puede ser mayor que la máxima.
                  </div>
                )}
              </div>
            )}
          </div>
          <div className={`${collapsed.location ? "" : "mb-3"}`}>
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-semibold">Ubicación:</span>
              <i
                className={`bi ${
                  collapsed.location ? "bi-chevron-up" : "bi-chevron-down"
                } icon`}
                onClick={() => toggleCollapse("location")}
              />
            </div>

            {!collapsed.location && (
              <select
                className="form-select"
                aria-label="Seleccionar departamento"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option disabled value="">
                  Seleccioná un departamento
                </option>
                {departamentosUruguay.map((dep) => (
                  <option key={dep} value={dep}>
                    {dep}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
        {showSidebar && (
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-dark w-50 me-2"
              onClick={handleFilters}
            >
              Limpiar filtros
            </button>
            <button className="btn btn-dark w-50" disabled={!isAgeValid}>
              Buscar
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default FilterSideBar;
