import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {

  const history = useHistory();
  // pulling from context
  const { firebase } = useContext(FirebaseContext);
  
  // setting state for form to use
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');




  // Basic, get back to some more validation
  const isInvalid = emailAddress === '' || password === '';

  const handleSignin = event => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE); // redirect if successfully logged in
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });    
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              // destrucuturing target off event - saves typing event.target
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" title="Sign In">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup" title="Sign up now.">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
