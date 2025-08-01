import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";



export default function Register() {

    return (
        <AuthLayout msg="Bienvenido a Patas Unidas">
            <div className="login-container">
                <div className="login-box">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUser">
                            <Form.Label className="d-none" htmlFor="name">Nombre</Form.Label>
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
                            <Form.Label className="d-none" htmlFor="email">Email</Form.Label>
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
                            <Form.Label className="d-none" htmlFor="password">Contraseña</Form.Label>
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


                        <Button
                            type="submit"
                            className="orange-button w-100 py-2 fw-light small"
                        >
                            Crear cuenta
                        </Button>
                    </Form>

                    <p className="mt-4 text-center fw-light small">
                        ¿Ya tienes cuenta?
                        <Link to="/login" className="orange-link">
                            Iniciar sesion
                        </Link>
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
}