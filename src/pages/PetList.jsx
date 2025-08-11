import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useSearchParams } from "react-router";

import FilterSideBar from "../components/FilterSideBar.jsx";
import PetCard from "../components/PetCard.jsx";
import { useApi } from "../hooks/useApi.jsx";

function PetList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = 18;
  const isAdopted = false;

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

  useEffect(() => {
    fetchAndStorePets({ ...activeFilters, page, limit, isAdopted });
  }, [searchParams]);

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
        <div className="d-flex flex-column flex-md-row">
          <div className="me-md-3 mb-3 mb-md-0">
            <FilterSideBar onSearch={handleSearch} onReset={handleReset} />
          </div>
          <div className="col-12 col-md-6 col-lg-8 col-xl-9">
            {pets.length === 0 ? (
              <p className="text-muted text-center mt-5">
                Lo sentimos, no se encontraron patitas con esos filtros.
              </p>
            ) : (
              <div className="row g-4">
                {pets.map((pet) => (
                  <div className="col-12 col-lg-6 col-xxl-4" key={pet.id}>
                    <PetCard pet={pet} />
                  </div>
                ))}
                <div className="d-flex justify-content-center mt-4">
                  <button
                    onClick={prevPage}
                    disabled={page === 1}
                    className="btn btn-outline-dark me-2"
                  >
                    Anterior
                  </button>
                  <span className="align-self-center">
                    Página {page} de {totalPages}
                  </span>
                  <button
                    onClick={nextPage}
                    disabled={page >= totalPages}
                    className="btn btn-outline-dark ms-2"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetList;
