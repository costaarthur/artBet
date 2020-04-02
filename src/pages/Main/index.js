import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaDice, FaSpinner } from 'react-icons/fa';

import Container from '../../components/Container';
import GameContainer from '../../components/GameContainer';
// import { Form, SubmitButton, List, ShowError, Pages } from './styles';
import { Contagem, Topo, Divinputs } from './styles';

export default function Cassino() {
  const [artCoins, setArtCoins] = useState(1000);
  const [winOrLose, setWinOrLose] = useState('');
  const [game, setGame] = useState('');

  const [hasError, setHasError] = useState('');

  const [betValue, setBetValue] = useState(0);

  const [dice, setDice] = useState(0);

  const [chosenDice, setChosenDice] = useState(0);

  const [loading, setLoading] = useState(false);

  // UseMemos
  const diceResult = useMemo(() => dice, [dice]);

  const dispatch = useDispatch();

  function addHeaderCoins(num) {
    return { type: 'ADD_COINS', num };
  }

  function addCoin() {
    setArtCoins(prevArtCoins => prevArtCoins + 1000);
    dispatch(addHeaderCoins(1123));
  }

  function win() {
    setWinOrLose('Ganhou');

    if (game === 'hilo') {
      setArtCoins(prevArtCoins => prevArtCoins + betValue * 0.9);
    }
    if (game === 'guess') {
      setArtCoins(prevArtCoins => prevArtCoins + betValue * 5);
    }
  }

  function lose() {
    setWinOrLose('Perdeu');
    setArtCoins(prevArtCoins => prevArtCoins - betValue);
  }

  function playHiLo() {
    if (chosenDice === 'high') {
      dice > 3
        ? win()
        : // setWinOrLose('Ganhou')
        // setArtCoins(prevArtCoins => prevArtCoins + betValue * 0.9)
        lose();
      // setWinOrLose('Perdeu');
      // setArtCoins(prevArtCoins => prevArtCoins - betValue);
    } else {
      dice < 4
        ? win()
        : // setWinOrLose('Ganhou')
        // setArtCoins(prevArtCoins => prevArtCoins + betValue * 0.9)
        lose();
      // setWinOrLose('Perdeu');
      // setArtCoins(prevArtCoins => prevArtCoins - betValue);
    }
  }

  function playGuess() {
    if (dice !== 0) {
      dice === chosenDice
        ? win()
        : // setWinOrLose('Ganhou');
        // setArtCoins(prevArtCoins => prevArtCoins + betValue * 5);
        lose();
      // setWinOrLose('Perdeu');
      // setArtCoins(prevArtCoins => prevArtCoins - betValue);
    }
  }

  // HIGH OR LOW EFFECT
  useEffect(() => {
    if (game === 'hilo') {
      playHiLo(dice, chosenDice);
    }
    if (game === 'guess') {
      playGuess(dice, chosenDice);
    }

    // if (dice > 3 && chosenDice === 'high' && game === 'hilo') {
    //   setWinOrLose('Ganhou');
    //   setArtCoins(prevArtCoins => prevArtCoins + betValue * 0.9);
    // }

    // if (dice < 4 && chosenDice === 'high' && game === 'hilo') {
    //   setWinOrLose('Perdeu');
    //   setArtCoins(prevArtCoins => prevArtCoins - betValue);
    // }

    // if (dice > 3 && chosenDice === 'low' && game === 'hilo') {
    //   setWinOrLose('Perdeu');
    //   setArtCoins(prevArtCoins => prevArtCoins - betValue);
    // }

    // if (dice < 4 && chosenDice === 'low' && game === 'hilo') {
    //   setWinOrLose('Ganhou');
    //   setArtCoins(prevArtCoins => prevArtCoins + betValue * 0.9);
    // }
    // guess checks
    // if (dice !== 0) {
    //   if (dice === chosenDice && game === 'guess') {
    //     setWinOrLose('Ganhou');
    //     setArtCoins(prevArtCoins => prevArtCoins + betValue * 5);
    //   }

    //   if (dice !== chosenDice && game === 'guess') {
    //     setWinOrLose('Perdeu');
    //     setArtCoins(prevArtCoins => prevArtCoins - betValue);
    //   }
    // }
  }, [dice]);

  // / ROLL DICE
  function rollDice() {
    setDice(1 + Math.floor(Math.random() * 6));
  }

  // // DICE GAMES
  function diceGames(cd) {
    if (betValue === 0) {
      setWinOrLose('');
      setHasError("You can't bet 0");
      return;
    }

    if (betValue > artCoins) {
      setWinOrLose('');
      setHasError("You can't bet more than you have");
      return;
    }

    setHasError('');
    rollDice();
    setChosenDice(cd);

    if (cd === 'high' || cd === 'low') {
      setGame('hilo');
    } else {
      setGame('guess');
    }
  }

  return (
    <>
      <Topo>
        <Contagem>
          No momento você possui: {artCoins.toFixed(2)} ArtCoins
        </Contagem>
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
        {game === 'hilo' ? <h3>Valor girado: {diceResult} </h3> : <h3> </h3>}
        <br />
        {/* adding inputs */}
        <div className="game-controls">
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
          <button type="button" onClick={() => diceGames('high')}>
            <span>HIGH</span>
          </button>
          <button type="button" onClick={() => diceGames('low')}>
            <span>LOW</span>
          </button>
        </div>
        {hasError ? <h6>{hasError}!</h6> : <h6> </h6>}
        {winOrLose && game === 'hilo' ? <h6>Você {winOrLose}!</h6> : <h6> </h6>}
      </GameContainer>
      {/* GUESS A NUMBER */}
      <GameContainer>
        <h1>Guess a number</h1>
        {game === 'guess' ? <h3>Valor girado: {diceResult} </h3> : <h3> </h3>}
        <br />
        <Divinputs>
          <h4>Valor da aposta</h4>
          <input value={betValue} onChange={e => setBetValue(e.target.value)} />
        </Divinputs>
        <Divinputs>
          <h4>Win chance</h4>
          <input value="16.67%" disabled />
        </Divinputs>
        <Divinputs>
          <h4>Payout</h4>
          <input value="500%" disabled />
        </Divinputs>
        <Divinputs>
          <h4>Profit on win</h4>
          <input value={betValue * 4} disabled />
        </Divinputs>
        <br />
        <button type="submit" onClick={() => diceGames(1)}>
          <span>1</span>
        </button>
        <button type="submit" onClick={() => diceGames(2)}>
          <span>2</span>
        </button>
        <button type="submit" onClick={() => diceGames(3)}>
          <span>3</span>
        </button>
        <button type="submit" onClick={() => diceGames(4)}>
          <span>4</span>
        </button>
        <button type="submit" onClick={() => diceGames(5)}>
          <span>5</span>
        </button>
        <button type="submit" onClick={() => diceGames(6)}>
          <span>6</span>
        </button>
        {setWinOrLose && game === 'guess' ? <h6>Você {winOrLose}!</h6> : ''}
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
