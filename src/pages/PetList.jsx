import { useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router";

import FilterSideBar from "../components/FilterSideBar.jsx";
import PetCard from "../components/PetCard.jsx";
import { useApi } from "../hooks/useApi.jsx";
import ReturnToTopButton from "../components/ReturnToTopButton.jsx";
import constants from "../utils/constants";

function PetList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showButton, setShowButton] = useState(false);
  const { listenToScrollPosition, handleScroll, scrollToTop } = constants;
  const offcanvasRef = useRef(null);
  const limit = 18;
  const isAdopted = false;
  const pageLocation = useLocation();

  const pets = useSelector((state) => state.pets.items);
  const totalPets = useSelector((state) => state.pets.total);
  const totalPages = Math.ceil(totalPets / limit);
  const { fetchAndStorePets } = useApi();

  const page = parseInt(searchParams.get("page")) || 1;
  const size = searchParams.get("size") || null;
  const sex = searchParams.get("sex") || null;
  const ageMin = searchParams.get("ageMin") || null;
  const ageMax = searchParams.get("ageMax") || null;
  const location = searchParams.get("location") || null;
  const species = searchParams.get("species") || null;

  const activeFilters = {
    ...(size && { size }),
    ...(sex && { sex }),
    ...(ageMin && { ageMin }),
    ...(ageMax && { ageMax }),
    ...(location && { location }),
    ...(species && { species }),
  };

  useLayoutEffect(() => {
    scrollToTop();
  }, [pageLocation.pathname, scrollToTop]);

  useEffect(() => {
    fetchAndStorePets({ ...activeFilters, page, limit, isAdopted });
  }, [searchParams]);

  useEffect(() => {
    const scrollHandler = () => handleScroll(setShowButton);
    listenToScrollPosition(scrollHandler);
  }, []);

  const closeFilters = () => {
    if (!offcanvasRef.current) return;
    const oc = window.bootstrap?.Offcanvas.getOrCreateInstance(
      offcanvasRef.current
    );
    oc?.hide();
  };

  const handleSearch = (filters) => {
    setSearchParams({ ...filters, page: 1 });
  };

  const handleReset = () => {
    setSearchParams({ page: 1 });
  };

  const nextPage = () => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page: page + 1,
    });
  };

  const prevPage = () => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page: Math.max(1, page - 1),
    });
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-dark mb-3">
              Patitas en Adopción
            </h1>
            <p className="lead text-secondary">
              Descubrí a los patitas que esperan una familia y están listos para
              llenar tu hogar de alegría y cariño
            </p>
          </div>
        </div>

        <button
          className="btn btn-dark mb-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#filtersOffcanvas"
          aria-controls="filtersOffcanvas"
        >
          <i className="bi bi-filter me-2"></i>Filtros
        </button>

        <div className="d-flex flex-column flex-md-row">
          <div className="col-12">
            {pets.length === 0 ? (
              <p className="text-muted text-center mt-5">
                Lo sentimos, no se encontraron patitas con esos filtros.
              </p>
            ) : (
              <>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {pets.map((pet) => (
                    <div className="col" key={pet.id}>
                      {/* Si tu componente <PetCard> ya renderiza una .card, poné .h-100 adentro de PetCard */}
                      <PetCard pet={pet} />
                    </div>
                  ))}
                </div>

                {/* Paginación fuera del row */}
                <div className="d-flex justify-content-center align-items-center mt-4 gap-2">
                  <button
                    onClick={prevPage}
                    disabled={page === 1}
                    className="btn btn-outline-dark"
                  >
                    Anterior
                  </button>
                  <span className="mx-2">
                    Página {page} de {totalPages}
                  </span>
                  <button
                    onClick={nextPage}
                    disabled={page >= totalPages}
                    className="btn btn-outline-dark"
                  >
                    Siguiente
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-start pb-3 pb-sm-0"
        tabIndex="-1"
        id="filtersOffcanvas"
        aria-labelledby="filtersOffcanvasLabel"
        ref={offcanvasRef}
      >
        <div className="offcanvas-header pb-2">
          <h5
            className="offcanvas-title fs-4 fw-bold "
            id="filtersOffcanvasLabel"
          >
            Filtros
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body p-0">
          <FilterSideBar
            onSearch={(filters) => {
              handleSearch(filters);
            }}
            onReset={() => {
              handleReset();
            }}
            isOffcanvas
          />
        </div>
      </div>

      {showButton && (
        <div className="d-flex gap-2 position-fixed bottom-0 start-0 p-3">
          <button
            className="btn btn-dark d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#filtersOffcanvas"
            aria-controls="filtersOffcanvas"
          >
            <i className="bi bi-filter"></i>
          </button>
          <ReturnToTopButton />
        </div>
      )}
    </div>
  );
}

export default PetList;
