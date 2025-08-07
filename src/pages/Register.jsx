import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AuthLayout msg="Bienvenido a Patas Unidas">
      <div className="login-container">
        <div className="login-box">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Control
                name="name"
                type="text"
                className="form-input"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                name="email"
                type="email"
                className="form-input"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div className="position-relative">
                <Form.Control
                  name="password"
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
              <Button
                text="Soy un Refugio"
                variant="secondary"
                customClasses="w-100 me-2"
              />
              <Button text="Crear Cuenta" customClasses="w-100" />
            </div>
          </Form>

          <p className="mt-4 text-center fw-light small">
            ¿Ya tienes cuenta?
            <Link
              to="/iniciar-sesion"
              className="orange-link ms-1 text-decoration-none fw-semibold"
            >
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
