import React from 'react';

import { Header } from '../components';
import * as ROUTES from '../constants/routes';
// import logo from '../logo.svg'; // removing when hosting

export function HeaderContainer( {children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Logo goes here" src="" />
        <Header.ButtonLink to={ROUTES.SIGN_IN} title="Sign In">Sign In</Header.ButtonLink>
      </Header.Frame>
      { children }
    </Header>
  );
}
