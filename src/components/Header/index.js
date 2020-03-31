import React from 'react';

// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { MdShoppingBasket } from 'react-icons/md';

import { HeaderContainer } from './styles';

export default function Header() {
  // const cartSize = useSelector(state => state.cart.length);

  return (
    <HeaderContainer>
      <div>
        <strong>ArtBet</strong>
        <h1>Meu ArtCoin: 0</h1>
      </div>
    </HeaderContainer>
  );
}
