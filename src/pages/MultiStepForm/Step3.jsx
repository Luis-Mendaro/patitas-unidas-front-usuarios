export default function Step3({ data, update, onNext, onBack }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label fw-medium">
          ¿Estás dispuesto/a a cubrir gastos veterinarios, vacunas y
          alimentación?
        </label>
        <input
          name="location"
          type="text"
          className="form-control"
          placeholder="Ej. Montevideo"
          defaultValue={data.location}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-medium">
          ¿Qué te motivó a adoptar y no comprar?
        </label>
        <input
          name="location"
          type="text"
          className="form-control"
          placeholder="Ej. Montevideo"
          defaultValue={data.location}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-medium">
          ¿Qué esperás de la convivencia con tu futura mascota?
        </label>
        <input
          name="location"
          type="text"
          className="form-control"
          placeholder="Ej. Montevideo"
          defaultValue={data.location}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-medium">
          ¿Qué te llamo la atención de esta mascota en particular?
        </label>
        <input
          name="location"
          type="text"
          className="form-control"
          placeholder="Ej. Montevideo"
          defaultValue={data.location}
        />
      </div>

      <div className="d-flex justify-content-between gap-2">
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
