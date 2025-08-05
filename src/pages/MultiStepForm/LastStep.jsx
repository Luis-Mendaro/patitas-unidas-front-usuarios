import { useState } from "react";

export default function LastStep({ data, pet, onBack, onSubmit }) {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleCheckbox = (e) => setTermsAccepted(e.target.checked);

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted)
      return alert("Debes aceptar los términos antes de continuar.");
    onSubmit();
  };

  return (
    <form onSubmit={handleFinalSubmit}>
      <h5 className="mb-3">Resumen de tu solicitud</h5>

      <div className="mb-4">
        <p>
          <strong>Mascota:</strong> {pet.name}
        </p>
        <p>
          <strong>Nombre completo:</strong> {data.name}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Teléfono:</strong> {data.phone}
        </p>
        <p>
          <strong>Departamento:</strong> {data.location}
        </p>
      </div>

      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="terms"
          checked={termsAccepted}
          onChange={handleCheckbox}
        />
        <label className="form-check-label" htmlFor="terms">
          Me comprometo a brindar un hogar responsable, amoroso y permanente a{" "}
          <strong>{pet.name}</strong>.
        </label>
      </div>

      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="patas-btn patas-btn-secondary"
          onClick={onBack}
        >
          Atrás
        </button>

        <button
          type="submit"
          className={`patas-btn ${
            termsAccepted ? "patas-btn-primary" : "bg-grey text-muted border-0"
          }`}
        >
          Confirmar adopción
        </button>
      </div>
    </form>
  );
}
