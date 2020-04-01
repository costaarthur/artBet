import React, { useState, useMemo, useEffect } from 'react';
import { FaDice, FaSpinner } from 'react-icons/fa';

import Container from '../../components/Container';
// import { Form, SubmitButton, List, ShowError, Pages } from './styles';
import { Contagem, Topo } from './styles';

export default function Cassino() {
  const [winOrLose, setWinOrLose] = useState('');
  const [guessWinOrLose, setGuessWinOrLose] = useState('');

  const [hasError, setHasError] = useState('');

  const [artCoins, setArtCoins] = useState(1000);
  const [betValue, setBetValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const [dice, setDice] = useState();
  const [guessDice, setGuessDice] = useState();

  const [hol, setHol] = useState('');
  const [guess, setGuess] = useState('');

  const diceResult = useMemo(() => dice, [dice]);
  const diceGuessResult = useMemo(() => guessDice, [guessDice]);

  function addCoin() {
    setLoading(true);
    setArtCoins(artCoins + 1000);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  // START EFFECT
  useEffect(() => {
    async function consoleWinOrLose() {
      setWinOrLose('');
    }

    consoleWinOrLose();
  }, []);

  // USEEFFECTS
  useEffect(() => {
    async function consoleCoins() {
      setArtCoins(artCoins);
    }

    consoleCoins();
  }, [artCoins]);

  // HIGH OR LOW EFFECT
  useEffect(() => {
    async function consoleDice() {
      setDice(dice);

      if (dice > 3 && hol === 'high') {
        setWinOrLose('Ganhou');
        setArtCoins(artCoins + betValue * 0.9);
      }

      if (dice < 4 && hol === 'high') {
        setWinOrLose('Perdeu');
        setArtCoins(artCoins - betValue);
      }

      if (dice > 3 && hol === 'low') {
        setWinOrLose('Perdeu');
        setArtCoins(artCoins - betValue);
      }

      if (dice < 4 && hol === 'low') {
        setWinOrLose('Ganhou');
        setArtCoins(artCoins + betValue * 0.9);
      }
    }

    consoleDice();
  }, [dice]);

  // GUESS EFFECT
  useEffect(() => {
    async function consoleGuessDice() {
      setGuessDice(guessDice);

      if (guessDice === guess) {
        setGuessWinOrLose('Ganhou');
        setArtCoins(artCoins + betValue * 5);
      }

      if (guessDice !== guess) {
        setGuessWinOrLose('Perdeu');
        setArtCoins(artCoins - betValue);
      }
    }

    consoleGuessDice();
  }, [guessDice]);

  // /
  // / ROLL DICES
  // /

  // H L DICE
  function rollDice() {
    setDice(1 + Math.floor(Math.random() * 6));
  }

  // GUESS DICE
  function rollGuessDice() {
    setGuessDice(1 + Math.floor(Math.random() * 6));
  }

  // HIGH OR LOW
  function highOrLow(hl) {
    console.log(betValue);
    if (betValue === 0) {
      setHasError("You can't bet 0");
      return console.log("You can't bet 0");
    }

    if (betValue > artCoins) {
      setHasError("You can't bet more than you have");
      return console.log('n pode');
    }

    setHasError('');

    rollDice();

    hl === 'high' ? setHol('high') : setHol('low');
  }

  // GUESS A NUMBER
  function guessANumber(num) {
    console.log(betValue);
    if (betValue === 0) {
      setHasError("You can't bet 0");
      return console.log("You can't bet 0");
    }

    if (betValue > artCoins) {
      setHasError("You can't bet more than you have");
      return console.log('n pode');
    }

    setHasError('');

    rollGuessDice();

    setGuess(num);
    console.log(`guess:${guess}`);
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
            {/* <FaSpinner /> */}
            {diceResult}
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
          {hasError ? <h1>{hasError}!</h1> : <h1 />}
          {winOrLose ? <h1>Voce {winOrLose}!</h1> : <h1 />}
        </div>
      </Container>
      {/* GUESS A NUMBER */}
      <Container>
        <div>
          <h1>Guess a number</h1>
          <h3>
            Valor girado:
            {/* {loading ? <FaSpinner /> : <FaSpinner />} */}
            {diceGuessResult}
          </h3>
          <br />
          <h4>Valor da aposta</h4>
          <input value={betValue} onChange={e => setBetValue(e.target.value)} />
          <br />
          <button type="button" onClick={() => guessANumber(1)}>
            1
          </button>
          <button type="button" onClick={() => guessANumber(2)}>
            2
          </button>
          <button type="button" onClick={() => guessANumber(3)}>
            3
          </button>
          <button type="button" onClick={() => guessANumber(4)}>
            4
          </button>
          <button type="button" onClick={() => guessANumber(5)}>
            5
          </button>
          <button type="button" onClick={() => guessANumber(6)}>
            6
          </button>

          {guessWinOrLose ? <h1>Voce {guessWinOrLose}!</h1> : <h1 />}
        </div>
      </Container>
    </>
  );
}

// switch (hol) {
//   case 'high' && dice > 3:
//     console.log('fooooi');
//   // if (dice > 3) return console.log('high high');
//   // break;

//   case 'high':
//     setHol('high');
//     if (dice <= 3) return console.log('high low');
//   // break;

//   case 'low':
//     setHol('low');
//     if (dice > 3) return console.log('low high');
//   // break;

//   case 'low':
//     setHol('low');
//     if (dice <= 3) return console.log('low low');
//   // break;

//   default:
//     return console.log('default');
// }
