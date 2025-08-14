function Badge({ text, icon }) {
  return (
    <div
      className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill mb-3 patas-text-primary"
      style={{ backgroundColor: "rgba(var(--patas-primary), 0.1)" }}
    >
      {icon && <i className={`bi ${icon} patas-text-primary`}></i>}
      <span className="fw-medium">{text}</span>
    </div>
  );
}

export default Badge;
