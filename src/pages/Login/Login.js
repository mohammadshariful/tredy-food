import React from "react";
import { Container, Form } from "react-bootstrap";
import login from "../../assets/Img/login-1.png";
import "./Login.css";
const Login = () => {
  return (
    <Container className="py-3">
      <div className="d-flex justify-content-center flex-column flex-lg-row">
        <div className="d-none d-md-none d-lg-block">
          <img className="login-img img-fluid" src={login} alt="" />
        </div>
        <div className="form-container">
          <h3 className="text-center">Login</h3>
          <p>
            Don't create an account?
            <span className="primary-color">Click Here</span>
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="custom-container gap-2">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Security Code</Form.Label>
                <Form.Control type="number" placeholder="Enter Security Code" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="number">
                <Form.Label>Secret Code</Form.Label>
                <Form.Control type="number" disabled defaultValue={1234} />
              </Form.Group>
            </div>

            <button type="submit" className="submit-btn">
              Log In
            </button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
