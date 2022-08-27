import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { getHeaders } from "../headers";
import { useNavigate } from "react-router-dom";

function Register() {
  // Using useState I get data entered in input and pass it to request body
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Using useNavigate hook to move to another page
  const navigate = useNavigate();

  function signUp(e) {
    e.preventDefault();
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const myHeaders = getHeaders();

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://reqres.in/api/register", requestOptions)
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        }
        const text = await response.json();
        throw new Error(text.error);
      })
      .then((result) => {
        navigate("/login");
      })
      .catch((error) => alert(error));
  }
  return (
    <Container className="register d-flex justify-content-center align-items-center vh-100">
      <Form>
        <h3 className="mb-5 bg-warning rounded p-2">
          Please note that registration works only for email{" "}
          <b>eve.holt@reqres.in</b>
        </h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="password"
          />
        </Form.Group>
        <Button id="register" variant="success" type="submit" onClick={signUp}>
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
