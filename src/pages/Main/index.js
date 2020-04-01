import React, { useState, useMemo, useEffect } from 'react';
import { FaDice, FaSpinner } from 'react-icons/fa';

import Container from '../../components/Container';
import GameContainer from '../../components/GameContainer';
// import { Form, SubmitButton, List, ShowError, Pages } from './styles';
import { Contagem, Topo, Divinputs } from './styles';

export default function Cassino() {
  const [winOrLose, setWinOrLose] = useState('');
  const [guessWinOrLose, setGuessWinOrLose] = useState('');

  const [hasError, setHasError] = useState('');

  const [artCoins, setArtCoins] = useState(1000);
  const [betValue, setBetValue] = useState(0);
  const [loading, setLoading] = useState(false);

  const [dice, setDice] = useState(0);
  const [guessDice, setGuessDice] = useState(0);

  const [hol, setHol] = useState('');
  const [guess, setGuess] = useState('');

  const diceResult = useMemo(() => dice, [dice]);
  const diceGuessResult = useMemo(() => guessDice, [guessDice]);

  // HIGH OR LOW EFFECT
  useEffect(() => {
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
  }, [dice]);

  // GUESS EFFECT
  useEffect(() => {
    if (guessDice !== 0) {
      if (guessDice === guess) {
        setGuessWinOrLose('Ganhou');
        setArtCoins(artCoins + betValue * 5);
      }

      if (guessDice !== guess) {
        setGuessWinOrLose('Perdeu');
        console.log('bla1');
        setArtCoins(artCoins - betValue);
      }
    }
  }, [guessDice]);

  function addCoin() {
    setLoading(true);
    setArtCoins(prevArtCoins => prevArtCoins + 1000);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

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
    if (betValue === 0) {
      setWinOrLose('');
      setHasError("You can't bet 0");
      return true;
    }

    if (betValue > artCoins) {
      setWinOrLose('');
      setHasError("You can't bet more than you have");
      return true;
    }

    setHasError('');

    rollDice();

    hl === 'high' ? setHol('high') : setHol('low');
  }

  // GUESS A NUMBER
  function guessANumber(num) {
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
  }

  return (
    <>
      <Topo>
        <Contagem>No momento você possui: {artCoins} ArtCoins</Contagem>
        <button type="submit" onClick={addCoin}>
          <span>Adicionar ArtCoins</span>
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
      <GameContainer>
        <h1>High or Low</h1>
        <h3>
          Valor girado:
          {/* <FaSpinner /> */}
          {diceResult}
        </h3>
        <br />
        <button type="button" onClick={() => highOrLow('high')}>
          <span>HIGH</span>
        </button>
        <button type="button" onClick={() => highOrLow('low')}>
          <span>LOW</span>
        </button>
        {/* adding inputs */}
        <div>
          <Divinputs>
            <h4>Bet amount</h4>
            <input
              value={betValue}
              onChange={e => setBetValue(Number(e.target.value))}
            />
          </Divinputs>
          <Divinputs>
            <h4>Win chance</h4>
            <input value="50%" disabled />
          </Divinputs>
          <Divinputs>
            <h4>Payout</h4>
            <input value="90%" disabled />
          </Divinputs>
          <Divinputs>
            <h4>Profit on win</h4>
            <input value={betValue * 0.9} disabled />
          </Divinputs>
          <br />
        </div>
        {hasError ? <h6>{hasError}!</h6> : <h6> </h6>}
        {winOrLose ? <h6>Voce {winOrLose}!</h6> : <h6> </h6>}
      </GameContainer>
      {/* GUESS A NUMBER */}
      <GameContainer>
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
        <button type="submit" onClick={() => guessANumber(1)}>
          <span>1</span>
        </button>
        <button type="submit" onClick={() => guessANumber(2)}>
          <span>2</span>
        </button>
        <button type="submit" onClick={() => guessANumber(3)}>
          <span>3</span>
        </button>
        <button type="submit" onClick={() => guessANumber(4)}>
          <span>4</span>
        </button>
        <button type="submit" onClick={() => guessANumber(5)}>
          <span>5</span>
        </button>
        <button type="submit" onClick={() => guessANumber(6)}>
          <span>6</span>
        </button>
        {guessWinOrLose ? <h6>Voce {guessWinOrLose}!</h6> : ''}
      </GameContainer>
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
