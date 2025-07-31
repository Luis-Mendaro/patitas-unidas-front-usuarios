import "./Button.css";

const Button = ({
  variant = "primary",
  icon,
  text,
  large = false,
  customClasses,
}) => {
  const sizeClass = large ? "patas-btn-lg" : "";
  const variantClass =
    variant === "secondary" ? "patas-btn-secondary" : "patas-btn-primary";

  return (
    <button
      className={`patas-btn ${variantClass} ${sizeClass} ${customClasses}`}
    >
      {icon && (
        <i
          className={`bi ${icon}`}
          style={{ marginRight: text ? "0.1rem" : 0 }}
        ></i>
      )}
      {text}
    </button>
  );
};

export default Button;
