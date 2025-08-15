import React, { useEffect } from "react";
import {
  FaLinkedin,
  FaClock,
  FaTools,
  FaTasks,
  FaUsers,
  FaGithub,
} from "react-icons/fa";
import "./AboutUs.css";

function AboutUs() {
  useEffect(() => {
    // Función para manejar el toggle de imágenes en móviles
    const handleImageToggle = () => {
      const imageContainers = document.querySelectorAll(
        ".highlight-card-container"
      );

      imageContainers.forEach((container) => {
        // Solo aplicar en dispositivos táctiles
        if (!window.matchMedia("(hover: hover)").matches) {
          const handleTouch = (e) => {
            e.preventDefault(); // Prevenir el scroll accidental

            // Toggle de la clase 'touched'
            container.classList.toggle("touched");
          };

          const handleClick = (e) => {
            if (!window.matchMedia("(hover: hover)").matches) {
              e.preventDefault();
              container.classList.toggle("touched");

              setTimeout(() => {
                container.classList.remove("touched");
              }, 4000);
            }
          };

          // Agregar event listeners
          container.addEventListener("touchstart", handleTouch, {
            passive: false,
          });
          container.addEventListener("click", handleClick);

          // Guardar las funciones para poder removerlas después
          container._handleTouch = handleTouch;
          container._handleClick = handleClick;
        }
      });
    };

    // Ejecutar cuando el componente se monta
    const timer = setTimeout(handleImageToggle, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      const imageContainers = document.querySelectorAll(
        ".highlight-card-container"
      );
      imageContainers.forEach((container) => {
        if (container._handleTouch) {
          container.removeEventListener("touchstart", container._handleTouch);
        }
        if (container._handleClick) {
          container.removeEventListener("click", container._handleClick);
        }
      });
    };
  }, []);

  return (
    <>
      <section className="hero-section position-relative d-flex align-items-center container">
        <div className="position-relative rounded p-4">
          <h1 className="display-5 mb-4  text-center fw-bolder">
            Sobre este proyecto
          </h1>
          <p className="lead">
            Somos 5 compañeros que, tras más de 600 horas de formación intensiva
            en 3 meses, nos propusimos un gran reto: crear esta página en solo 3
            semanas. Con jornadas completas, horas extras y fines de semana
            dedicados, logramos darle vida a un proyecto que refleja no solo lo
            que aprendimos, sino el esfuerzo y la pasión que pusimos en cada
            línea de código. Este sitio es parte de nuestro portfolio y un
            reflejo de nuestra dedicación y compromiso.
            <br />
            Este proyecto fue desarrollado en el Coding Bootcamp de{" "}
            <a
              href="https://ha.dev"
              className="fw-bold text-decoration-none hack"
            >
              Hack Academy
            </a>
            .
          </p>
        </div>
      </section>

      <section className="container position-relative cards-section">
        <div className="row g-4 floating-cards justify-content-center">
          <div className="col-12 col-sm-6 col-lg-3 position-relative">
            <div className="card shadow-sm h-100 rounded-4 position-relative overflow-hidden">
              <div className=" text-center m-3 ">
                <h5 className="card-title mt-4">Duración</h5>
                <p className="card-text text-center">
                  El proyecto fue desarrollado en tan sólo 3 semanas, dividido
                  en <em>sprints</em> (Scrum) de una semana de duración.
                </p>
              </div>
            </div>
            <FaClock
              size={50}
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translate(-50%, -50%)",
                backgroundColor: "#e37036ff",
                borderRadius: "50%",
                padding: "8px",
                boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                color: "white",
                border: "2px solid #b65b28",
              }}
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-3 position-relative">
            <div className="card shadow-sm h-100  rounded-4 position-relative overflow-hidden">
              <div className="m-3">
                <h5 className="card-title text-center mt-4">Tecnologías</h5>
                <p className="card-text text-center">
                  Para el Front-End se desarrolló una aplicación en{" "}
                  <strong>React</strong> mientras que el Back-End consiste en
                  una <strong>REST API</strong> construida con Node.js, Express,
                  SQL y Git/GitHub.
                </p>
              </div>
            </div>
            <FaTools
              size={50}
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translate(-50%, -50%)",
                backgroundColor: "#e37036ff",
                borderRadius: "50%",
                padding: "8px",
                boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                color: "white",
                border: "2px solid #b65b28",
              }}
            />
          </div>

          <div className="col-12 col-sm-6 col-lg-3 position-relative">
            <div className="card shadow-sm h-100  rounded-4 position-relative overflow-hidden">
              <div className=" text-center m-3">
                <h5 className="card-title mt-4 text-center">
                  División de tareas
                </h5>
                <p className="card-text">
                  Se utilizó <strong>Trello</strong> para la organización ágil,
                  manteniendo a cada integrante al tanto del progreso y sus
                  responsabilidades.
                </p>
              </div>
            </div>
            <FaTasks
              size={50}
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translate(-50%, -50%)",
                backgroundColor: "#e37036ff",
                borderRadius: "50%",
                padding: "8px",
                boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                color: "white",
                border: "2px solid #b65b28",
              }}
            />
          </div>
        </div>
      </section>

      <section className="container team-section">
        <div className="row g-4 mt-5">
          <div className="col-md-4">
            <div className="card h-100 team-card text-center overflow-hidden rounded-top-4 ">
              <div className="">
                <FaUsers
                  size={50}
                  color="white"
                  style={{
                    backgroundColor: "#e37036ff",
                    borderRadius: "50%",
                    padding: "10px",
                    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                    border: "2px solid #b65b28",
                    marginBottom: "15px",
                    marginTop: "25px",
                  }}
                />
                <h5 className="card-title m-3 mb-4 ">Equipo</h5>
                <hr />
                <p className="card-text mt-5 m-3 ">
                  Somos un equipo de estudiantes del Bootcamp Full Stack de{" "}
                  <strong>Hack Academy</strong>. Durante el proyecto aplicamos
                  metodologías ágiles, trabajo colaborativo y las tecnologías
                  aprendidas en clase para crear una aplicación completa en
                  pocas semanas.
                </p>
              </div>
            </div>
          </div>
          {[
            {
              name: "Bruno",
              role: "Estudiante Full Stack Developer",
              imgAnimal: "./img/bruno.avif",
              imgReal: "./img/cambiar foto.jpg",
              description: "Apasionado por el desarrollo web...",
              linkedin: "https://www.linkedin.com/in/bruno/",
              github: "https://github.com/bruno",
            },
            {
              name: "Juan",
              role: "Estudiante Full Stack Developer",
              imgAnimal: "./img/juan.avif",
              imgReal: "./img/juan.jpg",
              description: "Motivado por el aprendizaje constante...",
              linkedin: "https://www.linkedin.com/in/juan/",
              github: "https://github.com/juan",
            },
            {
              name: "Nicolas",
              role: "Full Stack Developer",
              imgAnimal: "./img/nico.jpeg",
              imgReal: "./img/nico2.jpeg",
              description: "Desarrollador orientado a crear aplicaciones funcionales, atractivas y creativas, integrando frontend y backend para ofrecer experiencias completas y eficientes.",
              linkedin: "https://uy.linkedin.com/in/reaserchear-nicolas-fernandez",
              github: "https://github.com/nikof7",
            },
            {
              name: "Joaquin",
              role: "Estudiante Full Stack Developer",
              imgAnimal: "./img/joaquin.avif",
              imgReal: "./img/Joaquin.jpeg",
              description: "Amante del código limpio...",
              linkedin: "https://www.linkedin.com/in/joaquin/",
              github: "https://github.com/joaquin",
            },
            {
              name: "Luis",
              role: "Estudiante Full Stack Developer",
              imgAnimal: "./img/luis.jpg",
              imgReal: "./img/luis2.jpg",
              description: "Desarrollador enfocado en la creación...",
              linkedin: "https://www.linkedin.com/in/luis-mendaro-34165037a/",
              github: "https://github.com/Luis-Mendaro",
            },
          ].map(
            ({
              name,
              role,
              imgAnimal,
              imgReal,
              description,
              linkedin,
              github,
            }) => (
              <div key={name} className="col-md-4">
                <div className="card h-100 team-card rounded-4 overflow-hidden">
                  <div className="image-wrapper highlight-card-container">
                    <img
                      src={imgAnimal}
                      alt={`${name} (animal)`}
                      className="card-img-top custom-rounded-top animal-img"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <img
                      src={imgReal}
                      alt={`${name} (real)`}
                      className="card-img-top custom-rounded-top real-img"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="text-primary">{role}</h6>
                    <p className="card-text text-start">{description}</p>
                    <div
                      className="d-flex justify-content-start gap-2 mt-3"
                    >
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-btn"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin size={28} />
                      </a>
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-btn"
                        aria-label="GitHub"
                      >
                        <FaGithub size={28} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default AboutUs;
