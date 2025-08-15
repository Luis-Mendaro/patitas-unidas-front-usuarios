import { useSelector } from "react-redux";
import LikedPet from "../components/LikedPet";
import { FaDog, FaCat, FaPaw } from "react-icons/fa";

const LikedPets = () => {
  const user = useSelector((state) => state.user.user);
  const userLikedPets = user.likedPet.pets;

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          {userLikedPets.length !== 0 ? (
            <div>
              <h1 className="display-4 fw-bold text-dark mb-3">Mis Patitas</h1>
              <p className="lead text-secondary">
                Estas patitas ya recibieron tu like, pero lo que más quieren es
                recibir tu cariño todos los días
              </p>
            </div>
          ) : (
            <div className="py-5">
              <div className="d-flex justify-content-center patas-text-primary fs-3 gap-2 mb-3">
                <FaCat />
                <FaDog />
                <FaPaw />
              </div>
              <p className="lead text-secondary">
                Aún no ha agregado ningun animal. Agregue Patitas para poder
                verlas aqui.
              </p>
            </div>
          )}
        </div>
      </div>

      {userLikedPets.length !== 0 && (
        <ul className="p-0 list-unstyled">
          {userLikedPets.map((likedPet) => (
            <li key={likedPet.id} className="mb-4">
              <LikedPet likedPet={likedPet} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LikedPets;
