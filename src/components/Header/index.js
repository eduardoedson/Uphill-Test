import React from 'react';
import { Nav } from './styled';
import SearchInput from '../Search';
import Logo from '../../images/uphill-logo.png';

export default function Header() {
  return (
    <Nav>
      <img src={Logo} alt="Uphill Logo" />
      <SearchInput />
    </Nav>
  );
}
