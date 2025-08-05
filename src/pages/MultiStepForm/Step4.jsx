export default function Step4({ data, update, onBack, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    update({ edad });
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Edad</label>
        <input
          name="edad"
          type="number"
          className="form-control"
          defaultValue={data.edad}
          required
          min={1}
        />
      </div>
      <div className="d-flex gap-2">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          Atrás
        </button>
        <button type="submit" className="btn btn-success">
          Enviar
        </button>
      </div>
    </form>
  );
}
