import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useApi } from "../hooks/useApi";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { registerUser } = useApi();

  const navigate = useNavigate();

  const userToken = useSelector((state) => state.user?.token);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    if (formData.password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      const response = await registerUser(formData);
      if (response.status === 201) {
        toast.success("Se creó tu cuenta satisfactoriamente.")
        navigate("/iniciar-sesion");
      }
    } catch (error) {
      toast.error("Ocurrió un error al registrarte. Intenta de nuevo.");
    }
  };


  if (userToken) {
    return <Navigate to={"/"} />;
  }
  return (
    <AuthLayout msg="Bienvenido a Patitas Unidas">
      <div className="login-container">
        <div className="login-box">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Control
                name="name"
                type="text"
                className="form-input"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
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
                required
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
                  required
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

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <div className="position-relative">
                <Form.Control
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  className="form-input pe-5"
                  placeholder="Confirmar contraseña"
                  value={formData.confirmPassword}
                  required
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
              <a href={import.meta.env.VITE_FRONT_SHELTER_URL} className="patas-btn patas-btn-secondary px-3 me-2 w-100">Soy un refugio</a>
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
