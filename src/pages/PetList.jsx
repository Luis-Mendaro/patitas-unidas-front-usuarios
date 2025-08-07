import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import FilterSideBar from "../components/FilterSideBar.jsx";
import PetCard from "../components/PetCard.jsx";
import { useApi } from "../hooks/useApi.jsx";

function PetList() {
  const [page, setPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState({});
  const limit = 18;
  const pets = useSelector((state) => state.pets.items);
  const totalPets = useSelector((state) => state.pets.total);
  const totalPages = Math.ceil(totalPets / limit);
  const { fetchAndStorePets } = useApi();
  const isAdopted = false;

  useEffect(() => {
    fetchAndStorePets({ ...activeFilters, page, limit, isAdopted });
  }, [page]);

  const handleSearch = async (filters) => {
    setActiveFilters(filters);
    setPage(1);
    await fetchAndStorePets({ ...filters, page: 1, limit, isAdopted });
  };

  const handleReset = async () => {
    setActiveFilters({});
    setPage(1);
    await fetchAndStorePets({ page: 1, limit, isAdopted });
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };

  return (
    <>
      <div>
        <div className="container py-5">
          <div className="d-flex flex-column flex-md-row">
            <div className="me-3 mb-3 mb-md-0">
              <FilterSideBar onSearch={handleSearch} onReset={handleReset} />
            </div>
            <div className="col-12 col-sm-6 col-lg-8 col-xl-9">
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
                      Página {page} de {totalPages}{" "}
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
    </>
  );
}

export default PetList;
