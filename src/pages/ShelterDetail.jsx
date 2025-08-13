import { useNavigate, useParams } from "react-router";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

function ShelterDetail() {
  // Con esto se puede hacer la llamada y obtener todos los datos del refugio.
  const { id } = useParams();
  const navigate = useNavigate();

  const shelter = {
    id: 1,
    name: "Animales sin hogar",
    creationDate: "2009",
    location: "Montevideo, Uruguay",
    description:
      "Somos una organización sin fines de lucro dedicada al rescate, rehabilitación y reubicación de animales abandonados. Trabajamos incansablemente para brindar una segunda oportunidad a aquellos que más lo necesitan, proporcionando atención médica, amor y cuidado hasta encontrarles un hogar permanente. Cada día enfrentamos historias difíciles, pero también somos testigos de transformaciones increíbles. Detrás de cada rescate hay un equipo comprometido, voluntarios apasionados y una comunidad que cree en el valor de la compasión. Nos enfocamos no solo en salvar vidas, sino también en crear conciencia sobre la tenencia responsable, el respeto hacia todos los seres vivos y la importancia de la adopción como primer camino. Gracias al apoyo de personas solidarias, podemos seguir ofreciendo alimento, tratamientos veterinarios y un refugio temporal a decenas de animales que esperan por una familia. Creemos que cada vida importa y que, con empatía y acción colectiva, podemos construir un mundo más justo para ellos.",
    rating: 4.8,
    totalReviews: 127,
    images: [
      "https://www.blueridgehumane.org/wp-content/uploads/2019/06/dog-2243682_1920.jpg",
      "https://www.blueridgehumane.org/wp-content/uploads/2019/06/dog-2243682_1920.jpg",
      "https://www.blueridgehumane.org/wp-content/uploads/2019/06/dog-2243682_1920.jpg",
    ],
    socialMedia: {
      instagram: "@animalessinhogar",
      facebook: "AnimalesSinHogar",
      twitter: "@animales_hogar",
    },
    contact: {
      phone: "+34 600 123 456",
      email: "contacto@animalessinhogar.org",
    },
    animals: [
      {
        id: 1,
        name: "Luna",
        image:
          "https://www.blueridgehumane.org/wp-content/uploads/2019/06/dog-2243682_1920.jpg",
      },
      {
        id: 2,
        name: "Max",
        image:
          "https://www.blueridgehumane.org/wp-content/uploads/2019/06/dog-2243682_1920.jpg",
      },
      {
        id: 3,
        name: "Bella",
        image:
          "https://www.blueridgehumane.org/wp-content/uploads/2019/06/dog-2243682_1920.jpg",
      },
      {
        id: 4,
        name: "Rocky",
        image:
          "https://www.blueridgehumane.org/wp-content/uploads/2019/06/dog-2243682_1920.jpg",
      },
      {
        id: 5,
        name: "Mia",
        image:
          "https://www.blueridgehumane.org/wp-content/uploads/2019/06/dog-2243682_1920.jpg",
      },
      {
        id: 6,
        name: "Charlie",
        image:
          "https://www.blueridgehumane.org/wp-content/uploads/2019/06/dog-2243682_1920.jpg",
      },
    ],
    products: [
      {
        id: 1,
        name: "Comida",
      },
      {
        id: 2,
        name: "Juguetes",
      },
      {
        id: 3,
        name: "Camas",
      },
      {
        id: 4,
        name: "Medicamentos",
      },
      {
        id: 5,
        name: "Collares",
      },
      {
        id: 6,
        name: "Juguetes",
      },
    ],
  };
  return (
    <main className="container">
      <BackButton />

      <div className="row g-5">
        <div className="col-lg-6">
          <div className="position-relative rounded overflow-hidden shadow mb-4">
            <img
              src={shelter.images[0]}
              alt={`Imagen de ${shelter.name}`}
              className="w-100"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100" />
          </div>

          <div className="row g-3">
            {shelter.images.slice(1).map((image, index) => (
              <div key={index} className="col-6">
                <div className="rounded overflow-hidden">
                  <img
                    src={image}
                    alt={`Imagen ${index + 2} de ${shelter.name}`}
                    className="w-100 object-fit-cover"
                    style={{ height: "130px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-6">
          <div className="h-100 d-flex flex-column">
            <h1 className="display-5 mb-3 fw-bolder"> {shelter.name}</h1>
            <div className="d-flex align-items-center gap-3 text-secondary mb-3">
              <span className="d-flex align-items-center gap-2">
                <i className="bi bi-calendar"></i>
                Fecha de creación: {shelter.creationDate}
              </span>
            </div>
            <div className="d-flex align-items-center gap-2 text-secondary mb-4">
              <i className="bi bi-geo-alt"></i>
              Ubicación: {shelter.location}
            </div>
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="fw-semibold text-dark">Redes:</span>
              <div className="d-flex gap-2">
                <div className="rounded d-flex align-items-center justify-content-center border border-2 px-2 py-1 ">
                  <i className="bi bi-twitter-x"></i>
                </div>
                <div className="rounded d-flex align-items-center justify-content-center border border-2 px-2 py-1 ">
                  <i className="bi bi-facebook"></i>
                </div>
                <div className="rounded d-flex align-items-center justify-content-center border border-2 px-2 py-1 ">
                  <i className="bi bi-instagram"></i>
                </div>
              </div>
            </div>
            <div className="flex-grow-1">
              <div className="card mb-4 ">
                <div className="card-body pb-3">
                  <h5 className="card-title fw-semibold">Descripción</h5>
                  <p className="card-text text-secondary">
                    {shelter.description}
                  </p>
                </div>
              </div>
            </div>
            <Button
              text="Contactar"
              icon="bi-telephone-fill"
              large={true}
              customClasses="w-100"
            />
          </div>
        </div>
      </div>

      <section className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 fw-bold">Nuestros Animales</h2>
          <Button variant="secondary" text="Ver todos" />
        </div>
        <div className="row g-3">
          {shelter.animals.map((animal) => (
            <div key={animal.id} className="col-6 col-md-4 col-lg-2">
              <div
                className="position-relative rounded overflow-hidden"
                style={{ aspectRatio: "1 / 1", cursor: "pointer" }}
              >
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                />
                <div
                  className="position-absolute bottom-0 start-0 text-white fw-medium px-2 pb-2"
                  style={{
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                >
                  {animal.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 fw-bold">Productos</h2>
          <Button variant="secondary" text="Ver todos" />
        </div>
        <div className="row g-3">
          {shelter.products.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-2">
              <div
                className="bg-light rounded d-flex align-items-center justify-content-center"
                style={{ aspectRatio: "1 / 1" }}
              >
                <div className="text-center p-3">
                  <p className="text-dark small fw-medium mb-0">
                    {product.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ShelterDetail;
