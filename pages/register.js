import React, { Fragment, useState } from "react";
import { authenticate, login, register } from "@/actions/userApi";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
  });

  const router = useRouter();

  const { email, username, password } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(values)
      .then((res) => {
        authenticate(res.data, () => {
          router.push("/login");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container style={{ paddingTop: 150 }}>
        <div>Register</div>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
          </FloatingLabel>
          <Button type="submit" className="mt-4">
            Login
          </Button>
        </Form>
      </Container>
    </Fragment>
  );
};

export default Register;
