import "./BackButton.css";
import { Link } from "react-router";

function BackButton({ to = "/", text = "Volver a Home" }) {
  return (
    <>
      <Link to={to} className="text-decoration-none patas-text-brown ">
        <div className="mt-4 mb-3 back-button px-2 rounded">
          <i className="bi bi-arrow-left me-2"></i>
          <span className="">{text}</span>
        </div>
      </Link>
    </>
  );
}

export default BackButton;
