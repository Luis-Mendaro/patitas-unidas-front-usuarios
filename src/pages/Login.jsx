import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router";

import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { useApi } from "../hooks/useApi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Login() {
  const { userLogin } = useApi();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
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
    </AuthLayout>
  );
}
