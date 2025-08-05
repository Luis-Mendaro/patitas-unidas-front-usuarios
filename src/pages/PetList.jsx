import { useSelector } from "react-redux";
import FilterSideBar from "../components/FilterSideBar.jsx";
import PetCard from "../components/PetCard.jsx";

function PetList() {
  const pets = useSelector((state) => state.pets);
  return (
    pets && (
      <>
        <div>
          <div className="container py-5">
            <div className="d-flex flex-column flex-md-row">
              <div className="me-3 mb-3 mb-md-0">
                <FilterSideBar />
              </div>
              <div className="col-12 col-sm-6 col-lg-8 col-xl-9">
                <div className="row g-3">
                  {pets.map((pet) => (
                    <div className="col-12 col-lg-6 col-xxl-4" key={pet.id}>
                      <PetCard pet={pet} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default PetList;
