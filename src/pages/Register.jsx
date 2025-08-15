import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {useApi} from "../hooks/useApi";
import "./Register.css";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [touched, setTouched] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const registerUser = useApi();
  const navigate = useNavigate();
  const userToken = useSelector((state) => state.user2?.token || state.user?.token);

  const errors = validate(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const shouldShowAsterisk = (name) =>
    !!errors[name] && (submitAttempted || touched[name]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length > 0) {
      toast.error("Por favor, completa todos los campos obligatorios.");
      return;
    }

    try {
      const response = await registerUser(formData);
      if (response.status === 201) {
        toast.success("Se creó tu cuenta satisfactoriamente.");
        navigate("/iniciar-sesion");
      }
    } catch (error) {
      toast.error("Ocurrió un error al registrarte. Intenta de nuevo.");
    }
  };

  if (userToken) return <Navigate to="/" />;

  return (
    <AuthLayout msg="Bienvenid@ a Patitas Unidas">
      <div className="login-container">
        <div className="login-box">
          <Form onSubmit={handleSubmit}>
            <Form.Group className={`mb-3 field ${shouldShowAsterisk("name") ? "show-asterisk" : ""}`} controlId="formBasicUser">
              <Form.Label>
                Nombre completo
                {shouldShowAsterisk("name") && <span className="asterisk">*</span>}
              </Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={shouldShowAsterisk("name") ? "invalid" : ""}
              />
            </Form.Group>

            
            <Form.Group className={`mb-3 field ${shouldShowAsterisk("email") ? "show-asterisk" : ""}`} controlId="formBasicEmail">
              <Form.Label>
                Email
                {shouldShowAsterisk("email") && <span className="asterisk">*</span>}
              </Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={shouldShowAsterisk("email") ? "invalid" : ""}
              />
            </Form.Group>

            <Form.Group className={`mb-3 field ${shouldShowAsterisk("password") ? "show-asterisk" : ""}`} controlId="formBasicPassword">
              <div className="position-relative">
                <Form.Label>
                  Contraseña
                  {shouldShowAsterisk("password") && <span className="asterisk">*</span>}
                </Form.Label>
                <Form.Control
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`pe-5 ${shouldShowAsterisk("password") ? "invalid" : ""}`}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="position-absolute end-0 me-3 eye-icon"
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </Form.Group>

            <Form.Group className={`mb-3 field ${shouldShowAsterisk("confirmPassword") ? "show-asterisk" : ""}`} controlId="formBasicConfirmPassword">
              <div className="position-relative">
                <Form.Label>
                  Confirmar contraseña
                  {shouldShowAsterisk("confirmPassword") && <span className="asterisk">*</span>}
                </Form.Label>
                <Form.Control
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirmar contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`pe-5 ${shouldShowAsterisk("confirmPassword") ? "invalid" : ""}`}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="position-absolute  end-0 me-3 eye-icon"
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button text="Crear Cuenta" customClasses="w-100" />
            </div>

            <p className="mt-4 text-center f-light small">
              ¿Ya tienes cuenta?
              <Link to="/iniciar-sesion" className="ms-1 patas-text-primary text-decoration-none fw-semibold">
                Iniciar sesión
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </AuthLayout>
  );
}

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "El nombre es obligatorio";
  if (!values.email.trim()) errors.email = "El email es obligatorio";
  if (!values.password) errors.password = "La contraseña es obligatoria";
  if (!values.confirmPassword) errors.confirmPassword = "Confirma tu contraseña";
  if (values.password && values.confirmPassword && values.password !== values.confirmPassword) {
    errors.confirmPassword = "Las contraseñas no coinciden";
  }
  return errors;
}