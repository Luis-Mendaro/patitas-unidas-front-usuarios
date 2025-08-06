import { useSelector } from "react-redux";
import LikedPet from "../components/LikedPet";

const LikedPets = () => {
  const user = useSelector((state) => state.user.user);
  const userLikedPets = user.likedPet.pets;
  return (
    <div className="container">
      <h2 className="my-4">Tus animalitos favoritos</h2>
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
