import "./FilterSideBar.css";

import { useState } from "react";

import {
  speciesFilters,
  sizeFilters,
  sexFilters,
  departamentosUruguay,
} from "../data/filterData";

function FilterSideBar({ onSearch, onReset, isOffcanvas = false }) {
  const [collapsed, setCollapsed] = useState({
    species: false,
    size: false,
    sex: false,
    age: false,
    location: false,
  });
  const [speciesFilter, setSpeciesFilter] = useState(null);
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

  const resetFilters = () => {
    setSpeciesFilter(null);
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
      <div className="p-3 d-flex flex-column h-100">
        <div className="mb-5 px-3" id="filter-content">
          <div className="mb-2 d-flex flex-wrap gap-1">
            {speciesFilter && (
              <span
                className="py-1 px-2 rounded bg-body-secondary"
                onClick={() => setSpeciesFilter(null)}
              >
                {speciesFilters.find((f) => f.value === speciesFilter)?.label}
              </span>
            )}

            {sizeFilter && (
              <span
                className="py-1 px-2 rounded bg-body-secondary"
                onClick={() => setSizeFilter(null)}
              >
                {sizeFilters.find((f) => f.value === sizeFilter)?.label}
              </span>
            )}

            {sexFilter && (
              <span
                className="py-1 px-2 rounded bg-body-secondary"
                onClick={() => setSexFilter(null)}
              >
                {sexFilters.find((f) => f.value === sexFilter)?.label}
              </span>
            )}

            {ageFilter[0] && (
              <span
                className="py-1 px-2 rounded bg-body-secondary"
                onClick={() => setAgeFilter(["", ageFilter[1]])}
              >
                Desde {ageFilter[0]} años
              </span>
            )}

            {ageFilter[1] && (
              <span
                className="py-1 px-2 rounded bg-body-secondary"
                onClick={() => setAgeFilter([ageFilter[0], ""])}
              >
                Hasta {ageFilter[1]} años
              </span>
            )}

            {location && (
              <span
                className="py-1 px-2 rounded bg-body-secondary"
                onClick={() => setLocation("")}
              >
                {location}
              </span>
            )}
          </div>

          <div className={`${collapsed.species ? "" : "mb-3"}`}>
            <div className={`d-flex justify-content-between mb-2`}>
              <span className="fw-semibold">Tipo:</span>
              <i
                className={`bi ${collapsed.species ? "bi-chevron-up" : "bi-chevron-down"
                  } icon`}
                onClick={() => toggleCollapse("species")}
              />
            </div>
            {!collapsed.species && (
              <div className="d-flex justify-content-evenly">
                {speciesFilters.map((filter) => {
                  return (
                    <button
                      key={filter.value}
                      className={`filter-btn ${speciesFilter === filter.value ? "selected" : ""
                        }`}
                      onClick={() =>
                        setSpeciesFilter(
                          speciesFilter === filter.value ? null : filter.value
                        )
                      }
                    >
                      {filter.icon}
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
                className={`bi ${collapsed.size ? "bi-chevron-up" : "bi-chevron-down"
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
                      className={`filter-btn-text w-100 mb-1 ${sizeFilter === filter.value ? "selected" : ""
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
                className={`bi ${collapsed.sex ? "bi-chevron-up" : "bi-chevron-down"
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
                      className={`filter-btn-text w-100 mb-1 ${sexFilter === filter.value ? "selected" : ""
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
                className={`bi ${collapsed.age ? "bi-chevron-up" : "bi-chevron-down"
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
                    className={`form-control text-center ${!isAgeValid ? "is-invalid" : ""
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
                    className={`form-control text-center ${!isAgeValid ? "is-invalid" : ""
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
                className={`bi ${collapsed.location ? "bi-chevron-up" : "bi-chevron-down"
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

        <div className="d-flex justify-content-between mt-auto">
          <button
            className="btn btn-outline-dark w-50 me-2"
            onClick={() => {
              resetFilters();
              onReset();
            }}
          >
            Limpiar filtros
          </button>

          <button
            className="btn btn-dark w-50"
            data-bs-dismiss="offcanvas"
            disabled={!isAgeValid}
            onClick={() => {
              const filters = {};

              if (speciesFilter) filters.species = speciesFilter;
              if (sizeFilter) filters.size = sizeFilter;
              if (sexFilter) filters.sex = sexFilter;
              if (location) filters.location = location;
              if (ageFilter[0]) filters.ageMin = ageFilter[0];
              if (ageFilter[1]) filters.ageMax = ageFilter[1];

              onSearch(filters);
            }}
          >
            Buscar
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterSideBar;
