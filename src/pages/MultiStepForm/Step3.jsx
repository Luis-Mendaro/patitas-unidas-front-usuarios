export default function Step3({ data, update, onNext, onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    update({
      coversMedicalExpenses: form.coversMedicalExpenses.value,
      motive: form.motive.value,
      expectations: form.expectations.value,
      petChoice: form.petChoice.value,
    });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 d-flex flex-column">
        <label className="form-label fw-medium">
          ¿Estás dispuesto/a a cubrir gastos veterinarios, vacunas y
          alimentación?
        </label>
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="coversMedicalExpenses"
              id="coversMedicalExpenses"
              value="true"
              defaultChecked={data.medicalExpenses === "true"}
              required
            />
            <label className="form-check-label" htmlFor="coversMedicalExpenses">
              Sí
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="coversMedicalExpenses"
              id="coversMedicalExpensesNo"
              value="no"
              defaultChecked={data.medicalExpenses === "false"}
            />
            <label
              className="form-check-label"
              htmlFor="coversMedicalExpensesNo"
            >
              No
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label fw-medium">
          ¿Qué te motivó a adoptar?
        </label>
        <input
          name="motive"
          type="text"
          className="form-control"
          // placeholder="Ej. Montevideo"
          defaultValue={data.motive}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-medium">
          ¿Qué esperás de la convivencia con tu futura mascota?
        </label>
        <input
          name="expectations"
          type="text"
          className="form-control"
          // placeholder="Ej. Montevideo"
          defaultValue={data.expectations}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-medium">
          ¿Qué te llamo la atención de esta mascota en particular?
        </label>
        <input
          name="petChoice"
          type="text"
          className="form-control"
          // placeholder="Ej. Montevideo"
          defaultValue={data.petChoice}
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
