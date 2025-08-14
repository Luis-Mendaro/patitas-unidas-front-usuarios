export default function Step2({ data, update, onNext, onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    update({
      petsAllowed: form.petsAllowed.value,
      outDoorSpace: form.outDoorSpace.value,
      children: form.children.value,
    });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label fw-medium mb-0">
          ¿Vivís en un lugar que permite mascotas?
        </label>
        <div className="form-text text-muted mb-1">
          Verificá si tu edificio o arrendador acepta animales.
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="petsAllowed"
            id="petsAllowed"
            value="true"
            defaultChecked={data.petsAllowed === "true"}
            required
          />
          <label className="form-check-label" htmlFor="petsAllowed">
            Sí
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="petsAllowed"
            id="petsAllowedNo"
            value="no"
            defaultChecked={data.petsAllowed === "false"}
          />
          <label className="form-check-label" htmlFor="petsAllowedNo">
            No
          </label>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label fw-medium">
          ¿Tenés patio o terraza? ¿Está cercado?
        </label>
        <input
          name="outDoorSpace"
          type="text"
          className="form-control"
          placeholder="Ej. Tengo un patio en mi casa"
          defaultValue={data.outDoorSpace}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-medium">
          ¿Hay niños en tu hogar? ¿De qué edad?
        </label>
        <input
          name="children"
          type="text"
          className="form-control"
          // placeholder="Ej. Montevideo"
          defaultValue={data.children}
          required
        />
      </div>

      <span className="text-muted small">Todos los campos son requeridos.</span>

      <div className="d-flex justify-content-between gap-2 mt-3">
        <button
          type="button"
          className="patas-btn patas-btn-secondary px-4"
          onClick={onBack}
        >
          Atrás
        </button>
        <button type="submit" className="patas-btn patas-btn-primary px-4">
          Siguiente
        </button>
      </div>
    </form>
  );
}
