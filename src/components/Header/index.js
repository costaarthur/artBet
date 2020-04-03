import React from 'react';
import { useSelector } from 'react-redux';

import { HeaderContainer } from './styles';

export default function Header() {
  const headerCoins = useSelector(state => state.headerCoins);

  return (
    <HeaderContainer>
      <strong>ArtBet</strong>
      <h1>Meus ArtCoins: {headerCoins}</h1>
    </HeaderContainer>
  );
}
