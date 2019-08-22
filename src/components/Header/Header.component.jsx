import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { HeaderContainer, LogoContainer } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
