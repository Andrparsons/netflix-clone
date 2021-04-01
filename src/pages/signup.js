import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { FooterContainer } from "../containers/footer";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid =
    (password === "") | (emailAddress === "") | (firstName === "");

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              autocomplete="off"
            />
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign Up
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in.</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              This page is protected by Google reCAPTCHA.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
