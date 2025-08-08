import { useSelector } from "react-redux";
import LikedPet from "../components/LikedPet";
import { FaDog, FaCat, FaPaw } from "react-icons/fa";

const LikedPets = () => {
  const user = useSelector((state) => state.user.user);
  const userLikedPets = user.likedPet.pets;
  return (
    <div className="container">
      <div className="d-flex align-items-center gap-3 mt-4 mb-3">
        <h2 className="fw-bold m-0">Mis Patitas</h2>
        <div className="fs-4 d-flex gap-2 patas-text-primary">
          <FaCat />
          <FaDog />
          <FaPaw />
        </div>
      </div>
      <ul className="p-0 list-unstyled">
        {userLikedPets.map((likedPet) => (
          <li key={likedPet.id} className="mb-4">
            <LikedPet likedPet={likedPet} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedPets;
