import { useState } from "react";
import { Link } from "react-router";
import { useApi } from "../../hooks/useApi.jsx";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import LastStep from "./LastStep";
import { useSelector } from "react-redux";

export default function MultiStepForm() {
  const { submitAdoptionRequest } = useApi();
  const loggedUserId = useSelector((state) => state.user?.user.id);
  const pet = {
    id: 1,
    name: "Milanesa",
    description:
      "Cado terminatio nesciunt charisma turba vilicus ultra. Arcesso video stipes. Quasi tempus cultellus.",
    images: [
      "https://srdogs.com/wp-content/uploads/2021/06/Windsor.jpg",
      "https://srdogs.com/wp-content/uploads/2021/06/Windsor.jpg",
      "https://srdogs.com/wp-content/uploads/2021/06/Windsor.jpg",
      "https://srdogs.com/wp-content/uploads/2021/06/Windsor.jpg",
      "https://srdogs.com/wp-content/uploads/2021/06/Windsor.jpg",
    ],
    sex: "female",
    size: "small",
    color: "rosa",
    age: "111",
    isAdopted: false,
    createdAt: "2025-07-30T14:01:16.000Z",
    updatedAt: "2025-07-30T14:01:16.000Z",
    categoryId: 2,
    shelterUserId: 5,
  };
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const requestData = {
    userId: loggedUserId,
    petId: pet.id,
    shelterUserId: pet.shelterUserId,
    status: "active",
    requestContent: formData,
  };

  // En nextstep o en prevstep se podria agregar formData al store con redux. Asi no se perderían los datos.
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    console.log("Formulario completo:", formData);
    submitAdoptionRequest(requestData);
    setSubmitted(true);
  };

  let title;
  switch (step) {
    case 1:
      title = "¡Queremos conocerte!";
      break;
    case 2:
      title = "Su nuevo hogar";
      break;
    case 3:
      title = "¿Por qué querés adoptar?";
      break;
    case 4:
      title = "Confirmación";
      break;
    default:
      title = "Formulario de adopción";
      break;
  }

  return (
    <div className="container d-flex justify-content-center my-5">
      <div
        className="card shadow-sm rounded-4 p-0"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        {submitted ? (
          <div className="p-5 text-center">
            <i className="bi bi-envelope-check display-4 text-success mb-3"></i>
            <h3 className="fw-bold mb-3">¡Gracias por dar este paso!</h3>
            <p className="text-muted mb-3">
              En los próximos días, la organización responsable de{" "}
              <strong>{pet.name}</strong> se pondrá en contacto con usted para
              continuar con el proceso de adopción.
            </p>
            <p>
              Por favor tenga en cuenta que{" "}
              <strong>esta solicitud no garantiza la adopción</strong>, ya que{" "}
              <em>
                la mascota podría estar en proceso de adopción con otra familia
                o en evaluación.
              </em>
            </p>
            <p className="text-muted">
              Si esta vez no es posible, no se desanime: hay muchos animales que
              aún están esperando una segunda oportunidad 🐾
            </p>

            <Link className="patas-btn patas-btn-primary mt-4" to="/">
              Volver al inicio
            </Link>
          </div>
        ) : (
          <>
            <div
              className="position-relative rounded-top-4 overflow-hidden"
              style={{ height: "220px" }}
            >
              <img
                src={pet.images[0]}
                alt={pet.name}
                className="w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                  color: "white",
                }}
              >
                <h4 className="m-0">{pet.name}</h4>
                {pet.sex && <small>{pet.sex}</small>}
              </div>
            </div>

            <div className="p-4">
              <h2 className="mb-4 fw-semibold patas-text-primary">{title}</h2>
              {step === 1 && (
                <Step1 data={formData} update={updateData} onNext={nextStep} />
              )}
              {step === 2 && (
                <Step2
                  data={formData}
                  update={updateData}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              {step === 3 && (
                <Step3
                  data={formData}
                  update={updateData}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              {step === 4 && (
                <LastStep
                  data={formData}
                  pet={pet}
                  update={updateData}
                  onBack={prevStep}
                  onSubmit={handleSubmit}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
