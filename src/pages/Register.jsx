import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router";

import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";

export default function Register() {
  return (
    <AuthLayout msg="Bienvenido a Patas Unidas">
      <div className="login-container">
        <div className="login-box">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Label className="d-none" htmlFor="name">
                Nombre
              </Form.Label>
              <Form.Control
                name="name"
                id="name"
                type="text"
                className="form-input"
                placeholder="Nombre"

                /*onChange={handleChange}*/
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Label className="d-none" htmlFor="email">
                Email
              </Form.Label>
              <Form.Control
                name="email"
                id="email"
                type="text"
                className="form-input"
                placeholder="Email"

                /*onChange={handleChange}*/
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="d-none" htmlFor="password">
                Contraseña
              </Form.Label>
              <Form.Control
                name="password"
                id="password"
                type="password"
                className="form-input"
                placeholder="Contraseña"
                /**value={formData.password}
                            onChange={handleChange}*/
              />
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
              Iniciar sesion
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
