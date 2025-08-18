import { Link } from "react-router";
import heroImage from "../../assets/img/hero.jpg";
import Button from "../Button";
import { useSelector } from "react-redux";
function Hero() {
  const totalPets = useSelector((state) => state.pets?.total);
  const allShelters = useSelector((state) => state.shelters?.items.shelters);
  return (
    <section className="Hero position-relative d-flex align-items-center py-5 mb-5">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-lg-6">
            <h1
              className="lh-1 mb-4"
              style={{ fontWeight: "900", fontSize: "3rem", maxWidth: "20ch" }}
            >
              Conectamos{" "}
              <span
                className=" text-decoration-noned-block patas-text-primary"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(20 75% 55%), hsl(25 70% 60%), hsl(35 75% 65%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                corazones
              </span>{" "}
              con hogares
            </h1>
            <p className="fs-5 text-muted mb-4 hero-text-limited">
              Muchos animales esperan una segunda oportunidad. Adopta o ayuda a
              transformar vidas, una patita a la vez.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-4 text-center mb-4">
              <div>
                <div className="h3 fw-bold patas-text-primary">{totalPets}</div>
                <div className="text-muted small">futuras mascotas</div>
              </div>
              <div>
                <div className="h3 fw-bold">{allShelters.length}</div>
                <div className="text-muted small">Refugios</div>
              </div>
            </div>
            <div className="d-md-inline d-flex justify-content-center w-100">
              <Link to="mascotas">
                <Button
                  text="Ver Animales"
                  large={true}
                  icon="bi-arrow-right"
                  variant="primary"
                  customClasses="col col-12 col-lg-6"
                />
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-6 position-relative">
            <div className="overflow-hidden rounded-4 shadow">
              <img
                src={heroImage}
                alt="Perro y gato jugando"
                className="img-fluid w-100 h-100"
              />
            </div>

            <div className="image-over-card position-absolute bg-white bg-opacity-95 p-4 rounded-3 shadow border">
              <div className="d-flex align-items-center gap-3">
                <div className="image-over-circle patas-bg-gradient rounded-circle d-flex align-items-center justify-content-center pulse">
                  <i className="bi bi-heart-fill text-white"></i>
                </div>
                <div>
                  <div className="fw-semibold">+100 solicitudes</div>
                  <div className="small text-muted">este mes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
