import React, { useState } from "react";
import Form from "../components/form";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";

export default function Signin() {
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = (password === "") | (emailAddress === "");

  const handleSignin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
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
              Sign In
            </Form.Submit>

            <Form.Text>
              New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>{" "}
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
