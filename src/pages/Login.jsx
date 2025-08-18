import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router";

import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { useApi } from "../hooks/useApi";
import { FaEye, FaEyeSlash, FaInfoCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Login() {
  const { userLogin } = useApi();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({
    email: "test@user.com",
    password: "1234",
  });
  const userToken = useSelector((state) => state.user?.token);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userLogin(formData);
    if (response) {
      navigate("/");
    }
  };

  if (userToken) {
    return <Navigate to={"/"} />;
  }

  return (
    <AuthLayout msg="Te damos la bienvenida">
      <div className="login-container">
        <div className="login-box">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="d-none" htmlFor="email">
                Email
              </Form.Label>
              <Form.Control
                name="email"
                id="email"
                type="text"
                className="form-input"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="d-none" htmlFor="password">
                Contraseña
              </Form.Label>
              <div className="position-relative">
                <Form.Control
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-input pe-5"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="position-absolute top-50 end-0 translate-middle-y me-3"
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </Form.Group>
            <div className="d-flex justify-content-between">
              <a
                href={import.meta.env.VITE_FRONT_SHELTER_URL}
                className="patas-btn patas-btn-secondary px-3 me-2 w-100"
              >
                Soy un refugio
              </a>
              <Button text="Iniciar Sesion" customClasses="w-100" />
            </div>
          </Form>



          <p className="mt-4 text-center fw-light small">
            ¿No tenés cuenta?
            <Link
              to="/registro"
              className="ms-1 patas-text-primary text-decoration-none fw-semibold"
            >
              Registrate
            </Link>
          </p>
        </div>
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Instrucciones de Uso</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p className="mb-2">
                    <strong>Para probar la aplicación, usa la cuenta de prueba:</strong>
                  </p>
                  <div className="bg-light p-2 rounded border mb-2">
                    <strong>Email:</strong> test@user.com <br />
                    <strong>Contraseña:</strong> 1234
                  </div>
                  <ul className="mb-0 ps-3 ms-3">
                    <li>Generá peticiones para adoptar una mascota</li>
                    <li>Navega por los perfiles de animales y refugios disponibles</li>
                    <li>Agregá mascotas a tu lista de interés</li>
                  </ul>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="patas-btn patas-btn-primary w-100"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}
