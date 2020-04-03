import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaDice } from 'react-icons/fa';

import Container from '../../components/Container';
import GameContainer from '../../components/GameContainer';
// import { Form, SubmitButton, List, ShowError, Pages } from './styles';
import { Contagem, Topo, Divinputs } from './styles';

export default function Cassino() {
  // const [artCoins, setArtCoins] = useState(1000);
  const [winOrLose, setWinOrLose] = useState('');
  const [game, setGame] = useState('');

  const [hasError, setHasError] = useState('');

  const [betValue, setBetValue] = useState(0);

  const [dice, setDice] = useState(0);

  const [chosenDice, setChosenDice] = useState(0);

  // UseMemos
  const diceResult = useMemo(() => dice, [dice]);

  const dispatch = useDispatch();
  const headerCoins = useSelector(state => state.headerCoins);

  function addHeaderCoins(gameResult) {
    if (gameResult === 'justadd') return { type: 'ADD_COINS', num: 1000 };
    if (gameResult === 'winhilo')
      return { type: 'ADD_COINS', num: betValue * 0.9 };
    if (gameResult === 'winguess')
      return { type: 'ADD_COINS', num: betValue * 5 };
    if (gameResult === 'lose') return { type: 'ADD_COINS', num: -1 * betValue };
  }

  function addCoin(gameResult) {
    dispatch(addHeaderCoins(gameResult));
  }

  function win() {
    setWinOrLose('Ganhou');
    game === 'hilo' ? addCoin('winhilo') : addCoin('winguess');
  }

  function lose() {
    setWinOrLose('Perdeu');
    addCoin('lose');
  }

  function playHiLo() {
    if (chosenDice === 'high') {
      dice > 3 ? win() : lose();
    } else {
      dice < 4 ? win() : lose();
    }
  }

  function playGuess() {
    if (dice !== 0) {
      dice === chosenDice ? win() : lose();
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

    if (betValue > headerCoins) {
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
          No momento você possui: {headerCoins.toFixed(2)} ArtCoins
        </Contagem>
        <button type="submit" onClick={() => addCoin('justadd')}>
          <span>Adicionar ArtCoins</span>
        </button>
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
