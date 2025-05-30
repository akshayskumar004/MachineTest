import { Button, Col, Container, Form, Row, Stack } from "react-bootstrap";
import "./Login.scss";
import loginImg from "../assets/images/loginImg.png";
import googleImg from "../assets/images/google.png";
import facebookImg from "../assets/images/facebook.png";
import linkdInImg from "../assets/images/linkdin.png";
import twitterImg from "../assets/images/twitter.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex =
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.length) {
      setError("Please enter email address.");
      console.log(error);

      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters and include 1 uppercase letter, 1 number, and 1 symbol."
      );
      return;
    }

    setError("");
    navigate("/home");
  };
  return (
    <div className="wrapper">
      <Container>
        <Row className="container-wrapper">
          <Col className="form-container">
            <Form onSubmit={handleSubmit}>
              <Stack gap={2}>
                <h1 className="title">Sign In</h1>
                <h3 className="new-user">
                  New user? <a href="#">Create an account</a>
                </h3>
                <Form.Floating className="mb-1">
                  <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <Form.Floating className="mb-2">
                  <Form.Control
                    id="floatingPasswordCustom"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPasswordCustom">Password</label>
                </Form.Floating>
                {error && (
                  <div
                    className="text-danger mb-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {error}
                  </div>
                )}
                <Form.Check
                  inline
                  label="Keep me signed in"
                  className="custom-checkbox mb-3"
                />
              </Stack>
              <Button className="signin-btn mb-3" type="submit">
                Sign In
              </Button>
              <div className="separator mb-2">
                <span>Or Sign In With</span>
              </div>
              <div className="icons-wrapper mb-2">
                <img src={googleImg} className="icon" alt="" />
                <img src={facebookImg} className="icon" alt="" />
                <img src={linkdInImg} className="icon" alt="" />
                <img src={twitterImg} className="icon" alt="" />
              </div>
            </Form>
          </Col>
          <Col className="banner">
            <img className="banner-icon" src={loginImg} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
