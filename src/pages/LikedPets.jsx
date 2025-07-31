import LikedPet from "../components/LikedPet";

const likedPetsList = [
  {
    id: 1,
    name: "Gracie",
    description:
      "Cado terminatio nesciunt charisma turba vilicus ultra. Arcesso video stipes. Quasi tempus cultellus.",
    images: [
      "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg",
      "https://avatars.githubusercontent.com/u/56163287",
      "https://avatars.githubusercontent.com/u/386034",
    ],
    sex: "female",
    size: "small",
    color: "rosa",
    age: "111",
    isAdopted: true,
    createdAt: "2025-07-30T14:01:16.000Z",
    updatedAt: "2025-07-30T14:01:16.000Z",
    categoryId: 2,
    shelterUserId: 5,
  },
  {
    id: 2,
    name: "Ace",
    description:
      "Fuga tremo utrum valens peior defero torqueo. Cornu conatus autem similique curriculum. Tribuo minus vivo ver comminor vicissitudo statim.",
    images: [
      "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://avatars.githubusercontent.com/u/45450002",
      "https://avatars.githubusercontent.com/u/40089496",
    ],
    sex: "female",
    size: "small",
    color: "verde menta",
    age: "84",
    isAdopted: true,
    createdAt: "2025-07-30T14:01:16.000Z",
    updatedAt: "2025-07-30T14:01:16.000Z",
    categoryId: 1,
    shelterUserId: 14,
  },
  {
    id: 3,
    name: "Milo",
    description:
      "Excepturi tantillus adfectus versus via atqui crapula crux conqueror pectus. Aiunt vinculum depromo vomica verecundia caecus civitas angustus. Causa callide voro claudeo terror.",
    images: [
      "https://avatars.githubusercontent.com/u/45121084",
      "https://avatars.githubusercontent.com/u/98066201",
      "https://avatars.githubusercontent.com/u/89829562",
    ],
    sex: "female",
    size: "large",
    color: "verde",
    age: "143",
    isAdopted: true,
    createdAt: "2025-07-30T14:01:16.000Z",
    updatedAt: "2025-07-30T14:01:16.000Z",
    categoryId: 1,
    shelterUserId: 2,
  },
  {
    id: 4,
    name: "Hank",
    description:
      "Eligendi voveo curiositas arceo. Aggredior provident crepusculum amplitudo stips valetudo ubi cubitum totus damno. Abscido solutio cetera iusto paulatim cena articulus approbo torqueo.",
    images: [
      "https://avatars.githubusercontent.com/u/53683549",
      "https://avatars.githubusercontent.com/u/14141663",
      "https://avatars.githubusercontent.com/u/77227695",
    ],
    sex: "male",
    size: "medium",
    color: "crema",
    age: "145",
    isAdopted: false,
    createdAt: "2025-07-30T14:01:16.000Z",
    updatedAt: "2025-07-30T14:01:16.000Z",
    categoryId: 3,
    shelterUserId: 1,
  },
  {
    id: 5,
    name: "Cooper",
    description:
      "Dens officiis cultellus vomica tero nulla adaugeo tandem. Usitas audeo thalassinus abutor advenio deleniti thesaurus excepturi angustus. Thesis cenaculum ceno ea officia.",
    images: [
      "https://avatars.githubusercontent.com/u/13029381",
      "https://avatars.githubusercontent.com/u/77240367",
      "https://avatars.githubusercontent.com/u/85761858",
    ],
    sex: "male",
    size: "small",
    color: "gris",
    age: "22",
    isAdopted: false,
    createdAt: "2025-07-30T14:01:16.000Z",
    updatedAt: "2025-07-30T14:01:16.000Z",
    categoryId: 2,
    shelterUserId: 1,
  },
];

const LikedPets = () => {
  return (
    <div className="container">
      {/**style={{ color: "white" }} */}
      <h1>Animales que te gustaron</h1>
      <ul className="p-0 list-unstyled">
        {likedPetsList.map((likedPet) => (
          <li key={likedPet.id}>
            <LikedPet likedPet={likedPet} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedPets;
