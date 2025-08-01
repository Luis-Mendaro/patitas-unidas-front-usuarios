import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";


export default function Login() {
    /*const [formData, setFormData] = useState({
         user: "",
         password: "",
     });
 
     const handleChange = (e) => {
         setFormData({
             ...formData,
             [e.target.name]: e.target.value,
         });
     };
 
     const handleSubmit = (e) => {
         e.preventDefault();
         console.log("Login data:", formData);
 */

    return (
        <AuthLayout msg="Bienvenido a Patas Unidas">
            <div className="login-container">
                <div className="login-box">
                    <Form>
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
                            Iniciar sesion
                        </Button>
                    </Form>

                    <p className="mt-4 text-center fw-light small">
                        ¿No tenés cuenta?
                        <Link to="/register" className="orange-link">
                            Registrate
                        </Link>
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
}
