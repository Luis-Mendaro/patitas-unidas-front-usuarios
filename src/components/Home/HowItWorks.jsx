import Badge from "../Badge";
import Button from "../Button";
import ReturnToTopButton from "../ReturnToTopButton";

function HowItWorks() {
  const steps = [
    {
      icon: "bi-search",
      title: "Explora",
      description: "Busca entre cientos de animales que necesitan un hogar.",
    },
    {
      icon: "bi-heart",
      title: "Conecta",
      description:
        "Encuentra tu compañero perfecto y solicita una pre-adopción.",
    },
    {
      icon: "bi-house-door",
      title: "Adopta",
      description:
        "Completa el proceso de adopción y dale una segunda oportunidad a tu nuevo mejor amigo.",
    },
  ];
  return (
    <section className="how-it-works py-5" id="how-it-works">
      <div className="container">
        <div className="text-center mb-5">
          <Badge text="Proceso simple" icon="bi-stars" />

          <h1 className="fw-bold mb-3">¿Cómo funciona?</h1>
          <p className="lead text-muted mx-auto">
            En solo {steps.length} pasos puedes cambiar una vida y encontrar tu
            compañero.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-box col-md-6 col-lg-3 d-flex flex-column text-center animate-fade-in gy-5"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="step-icon-wrapper position-relative mb-4">
                <div className="step-icon rounded-circle mx-auto d-flex align-items-center justify-content-center patas-bg-gradient">
                  <i className={`bi ${step.icon} fs-2 text-white`}></i>
                </div>
                <div
                  className="step-number position-absolute rounded-circle d-flex align-items-center justify-content-center fw-bold patas-bg-gradient"
                  style={{ animationDelay: `${index * 200 + 600}ms` }}
                >
                  {index + 1}
                </div>
              </div>

              <div className="step-content border rounded-4 p-4 flex-grow-1">
                <h5 className="fw-bold mb-3">{step.title}</h5>
                <p className="patas-text-brown">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <div className="cta-box p-5 rounded-4 shadow border mx-auto">
            <div className="cta-content">
              <div className="cta-icon patas-bg-gradient mx-auto mb-4 rounded-circle d-flex align-items-center justify-content-center shadow">
                <i className="bi-heart-fill text-white fs-3 pulse"></i>
              </div>
              <h3 className="fw-bold mb-3">¿Quieres cambiar una vida?</h3>
              <p className="text-muted mb-4 lead">
                Cientos de animales están esperando conocerte. Tu hogar podría
                ser exactamente lo que necesitan para encontrar la felicidad que
                merecen.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Button
                  variant="primary"
                  text="Comenzar ahora"
                  icon="bi-person-hearts"
                  large={true}
                />
                <Button
                  icon="bi-question-circle"
                  text="Saber más"
                  variant="secondary"
                  large={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReturnToTopButton />
    </section>
  );
}

export default HowItWorks;
