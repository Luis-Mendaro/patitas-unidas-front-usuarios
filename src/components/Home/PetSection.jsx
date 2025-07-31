import Badge from "../Badge";

function PetSection() {
  const pets = [
    {
      id: 2,
      name: "Ace",
      description:
        "Fuga tremo utrum valens peior defero torqueo. Cornu conatus autem similique curriculum. Tribuo minus vivo ver comminor vicissitudo statim.",
      images: [
        "https://avatars.githubusercontent.com/u/31630839",
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
  ];
  return (
    <section className="pets-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <div className="d-inline-flex align-items-center gap-2 text-muted">
            <Badge text="Historias de esperanza" icon="bi-heart-fill" />
          </div>
          <h2 className="fw-bold mb-3">
            Animales buscando
            <span className="patas-text-primary d-block">hogar</span>
          </h2>
          <p className="fs-5 text-muted text-center lead">
            Cada uno tiene una historia única y está esperando escribir un nuevo
            capítulo contigo. Dale una segunda oportunidad y recibe amor
            incondicional.
          </p>
        </div>

        <div className="row g-4 mb-5 justify-content-center">
          {pets.slice(0, 2).map((pet) => (
            <div
              key={pet.id}
              className="col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <div
                className="pet-card-preview rounded-4 d-flex justify-content-center align-items-center"
                style={{ width: "15rem", height: "20rem" }}
              >
                <p className="fs-5 text-muted mb-0">{pet.name}</p>
              </div>
            </div>
          ))}

          <div className="col-md-6 col-lg-4 d-flex justify-content-center">
            <div
              className="pet-card-preview rounded-4 d-flex justify-content-center align-items-center text-center cursor-pointer"
              style={{ width: "15rem", height: "20rem" }}
            >
              <p className="fs-5 text-muted mb-0">
                Ver todos los animales{" "}
                <i className="bi bi-arrow-right ms-1"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PetSection;
