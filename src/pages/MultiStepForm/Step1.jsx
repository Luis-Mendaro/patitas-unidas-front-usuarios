export default function Step1({ data, update, onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    update({
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      location: form.location.value,
    });
    onNext();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-medium">
            ¿Cuál es tu nombre completo?
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Ingresa tu nombre"
            defaultValue={data.name}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-medium">
            ¿Cual es tu dirección de correo electrónico?
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="mail@ejemplo.com"
            defaultValue={data.email}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-medium">Teléfono</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="099 123 456"
            defaultValue={data.phone}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-medium mb-0">¿Dónde vivís?</label>
          <div className="form-text text-muted mb-1">
            Necesitamos saber dónde vivirá la mascota.
          </div>
          <input
            name="location"
            type="text"
            className="form-control"
            placeholder="Ej. Montevideo"
            defaultValue={data.location}
            required
          />
        </div>

        <span className="text-muted small">Todos los campos son requeridos.</span>
        <div className="text-end">
          <button className="patas-btn patas-btn-primary px-4" type="submit">
            Siguiente
          </button>
        </div>
      </form>
    </>
  );
}
