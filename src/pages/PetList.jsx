import FilterSideBar from "../components/FilterSideBar.jsx";
import PetCard from "../components/PetCard.jsx";
import pets from "../data/pets.js";

function PetList() {
  return (
    <>
      <div className="patas-bg-gradient-soft">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <FilterSideBar />
            </div>
            <div className="col-12 col-sm-6 col-lg-8 col-xl-9">
              <div className="row g-2">
                <div className="col-12 col-lg-6 col-xxl-4">
                  <PetCard />
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <PetCard />
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <PetCard />
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <PetCard />
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <PetCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PetList;
