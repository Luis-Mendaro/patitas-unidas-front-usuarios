import React from "react";
import { FaLinkedin, FaClock, FaTools, FaTasks } from "react-icons/fa";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <section
        className="hero-section position-relative text-white d-flex align-items-center"
        style={{
          backgroundImage: "url('/img/nosotros.jpg')",
        }}
      >
        <div className="overlay"></div>
        <div className="position-relative text-start  rounded p-4 mx-3 hero-text ">
          <h1 className="display-4 fw-bold text text-white">
            Sobre este proyecto
          </h1>
          <p className="lead">
            El presente sitio de e-commerce es un proyecto desarrollado por
            estudiantes del Coding Bootcamp de{" "}
            <a href="https://ha.dev" className="text-info fw-bold">
              Hack Academy
            </a>
            .
          </p>
        </div>
      </section>

      <section className="container position-relative cards-section">
        <div className="row g-4 floating-cards justify-content-center">
          {/* Duración */}
          <div className="col-12 col-sm-6 col-lg-3 position-relative">
            <div className="card shadow-sm h-100  rounded-4 position-relative">
              <FaClock
                size={50}
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#e37036ff",
                  borderRadius: "50%",
                  padding: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                  color: "white",
                  border: "2px solid #b65b28",
                }}
              />
              <div className="card-body text-center">
                <h5 className="card-title mt-4">Duración</h5>
                <p className="card-text text-start">
                  El proyecto fue desarrollado en tan sólo 3 semanas, dividido
                  en <em>sprints</em> (Scrum) de una semana de duración.
                </p>
              </div>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="col-12 col-sm-6 col-lg-3 position-relative">
            <div className="card shadow-sm h-100  rounded-4 position-relative">
              <FaTools
                size={50}
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#e37036ff",
                  borderRadius: "50%",
                  padding: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                  color: "white",
                  border: "2px solid #b65b28",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-4">Tecnologías</h5>
                <p className="card-text text-start">
                  Para el Front-End se desarrolló una aplicación en{" "}
                  <strong>React</strong> mientras que el Back-End consiste en
                  una <strong>REST API</strong> construida con Node.js, Express,
                  SQL y Git/GitHub.
                </p>
              </div>
            </div>
          </div>

          {/* División de tareas */}
          <div className="col-12 col-sm-6 col-lg-3 position-relative">
            <div className="card shadow-sm h-100  rounded-4 position-relative">
              <FaTasks
                size={50}
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#e37036ff",
                  borderRadius: "50%",
                  padding: "8px",
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                  color: "white",
                  border: "2px solid #b65b28",
                }}
              />
              <div className="card-body text-start">
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
          </div>
        </div>
      </section>

      <section className="container team-section ">
        <div className="row g-4 ">
          <div className="col-md-4">
            <div className="card shadow-lg h-100 team-card  ">
              <div className="card-body ">
                <h5 className="card-title">Equipo</h5>
                <hr />
                <p className="card-text">
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
              role: "Estudiante  Full Stack Developer",
              img: "./img/bruno.avif",
              description:
                "Apasionado por el desarrollo web y la creación de experiencias digitales accesibles.",
            },
            {
              name: "Juan",
              role: "Estudiante  Full Stack Developer",
              img: "./img/juan.avif",
              description:
                "Motivado por el aprendizaje constante y el trabajo en equipo para lograr productos de calidad.",
            },
            {
              name: "Nicolas",
              role: "Estudiante  Full Stack Developer",
              img: "./img/nico.avif",
              description:
                "Entusiasta del diseño UX y la optimización de aplicaciones web modernas.",
            },
            {
              name: "Joaquin",
              role: "Estudiante  Full Stack Developer",
              img: " ./img/joaquin.avif",
              description:
                "Amante del código limpio y el desarrollo ágil con tecnologías modernas.",
            },
            {
              name: "Luis",
              role: "Estudiante  Full Stack Developer",
              img: "./img/luis.avif",

              description:
                "Desarrollador enfocado en la creación de aplicaciones funcionales y atractivas.",
            },
          ].map(({ name, role, img, description }) => (
            <div key={name} className="col-md-4">
              <div className="card shadow-lg h-100 team-card rounded-5">
                {" "}
                <img
                  src={img}
                  alt={name}
                  className="card-img-top custom-rounded-top highlight-card"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <h6 className="text-primary">{role}</h6>
                  <p className="card-text">{description}</p>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-btn"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutUs;
