import React, { useState } from 'react';
import { FaDice, FaSpinner } from 'react-icons/fa';

import Container from '../../components/Container';
// import { Form, SubmitButton, List, ShowError, Pages } from './styles';
import { Contagem, Topo } from './styles';

export default function Cassino() {
  const [artCoins, setArtCoins] = useState(1000);
  const [betValue, setBetValue] = useState(0);
  const [dice, setDice] = useState(0);
  const [loading, setLoading] = useState(false);

  function addCoin() {
    setLoading(true);
    setArtCoins(artCoins + 1000);
    // setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  function rollDice() {
    setDice(1 + Math.floor(Math.random() * 6));
  }

  function highOrLow(hl) {
    rollDice();

    switch (hl) {
      case 'high':
        if (dice > 3) return console.log('high high');

      case 'high':
        if (dice <= 3) return console.log('high low');

      case 'low':
        if (dice > 3) return console.log('low high');

      case 'low':
        if (dice <= 3) return console.log('low low');

      default:
        return console.log('default');
    }
  }

  //   if (hl === 'high') {
  //     console.log(dice);
  //   } else {
  //     console.log(dice);
  //   }
  // }

  return (
    <>
      <Topo>
        <Contagem>No momento você possui: {artCoins} ArtCoins</Contagem>
        <button type="button" onClick={addCoin}>
          Adicionar ArtCoins
        </button>
        {loading ? <FaSpinner /> : ''}
      </Topo>
      <Container>
        <h1>
          <FaDice />
          Jogos
          <FaDice />
        </h1>
      </Container>
      {/* HIGH OR LOW */}
      <Container>
        <div>
          <h1>High or Low</h1>
          <h3>
            Valor girado:
            <FaSpinner />
            {dice}
          </h3>
          <br />
          <h4>Valor da aposta</h4>
          <input value={betValue} onChange={e => setBetValue(e.target.value)} />
          <br />
          <button type="button" onClick={() => highOrLow('high')}>
            HIGH
          </button>
          <button type="button" onClick={() => highOrLow('low')}>
            LOW
          </button>
          {dice ? <h1>Voce Ganhou!</h1> : <h1>Voce Perdeu!</h1>}
        </div>
      </Container>
      {/* GUESS A NUMBER */}
      <Container>
        <div>
          <h1>Guess a number</h1>
          <h3>
            Valor girado: {loading ? <FaSpinner /> : <FaSpinner />}
            {dice}
          </h3>
          <br />
          <h4>Valor da aposta</h4>
          <input value={betValue} onChange={e => setBetValue(e.target.value)} />
          <br />
          <button type="button" onClick={() => rollDice('high')}>
            1
          </button>
          <button type="button" onClick={() => rollDice('high')}>
            2
          </button>
          <button type="button" onClick={() => rollDice('high')}>
            3
          </button>
          <button type="button" onClick={() => rollDice('high')}>
            4
          </button>
          <button type="button" onClick={() => rollDice('high')}>
            5
          </button>
          <button type="button" onClick={() => rollDice('high')}>
            6
          </button>

          {dice ? <h1>Voce Ganhou!</h1> : <h1>Voce Perdeu!</h1>}
        </div>
      </Container>
    </>
  );
}
