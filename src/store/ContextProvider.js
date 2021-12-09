import { useEffect, useMemo, useState } from "react";
import GameContext from "./context-store";

const ContextProvider = (props) => {
  const [playing, setPlaying] = useState(true);
  const [diceNumber, setDiceNumber] = useState(null);
  const [activePlayer, setActivePlayer] = useState(1);
  const [player1Score, setPlayer1Score] = useState({ current: 0, total: 0 });
  const [player2Score, setPlayer2Score] = useState({ current: 0, total: 0 });
  const [winner, setWinner] = useState(null);
  const [restarting, setRestarting] = useState(false);

  const setTotalScore = (playerNumber, diceNumber) => {
    if (playerNumber === 1) {
      setPlayer1Score((prevState) => {
        const previousState = { ...prevState };
        previousState.total += previousState.current;
        previousState.current = 0;
        setActivePlayer((prevState) => (prevState === 1 ? 2 : 1));
        return previousState;
      });
    } else {
      setPlayer2Score((prevState) => {
        const previousState = { ...prevState };
        previousState.total += previousState.current;
        previousState.current = 0;
        setActivePlayer((prevState) => (prevState === 1 ? 2 : 1));
        return previousState;
      });
    }
  };

  const setCurrentScore = (playerNumber, diceNumber) => {
    if (playerNumber === 1) {
      setPlayer1Score((prevState) => {
        const previousState = { ...prevState };
        previousState.current = previousState.current + diceNumber;
        return previousState;
      });
    } else {
      setPlayer2Score((prevState) => {
        const previousState = { ...prevState };
        previousState.current = previousState.current + diceNumber;
        return previousState;
      });
    }
  };

  const rollDiceHandler = () => {
    if (!playing) return;

    const diceNumber = Math.floor(Math.random() * 6);
    setDiceNumber(diceNumber);
    setCurrentScore(activePlayer, diceNumber);

    if (diceNumber === 0) {
      setTotalScore(activePlayer, diceNumber);
    }
  };

  const holdDiceHandler = () => {
    if (!playing) return;

    setTotalScore(activePlayer);
  };

  const checkIfCanBeRestarted = () => {
    if (
      player1Score.current === 0 &&
      player2Score.current === 0 &&
      player1Score.total === 0 &&
      player2Score.total === 0
    ) {
      return false;
    } else return true;
  };

  const restartHandler = () => {
    if (!playing) return;

    const canBeRestarted = checkIfCanBeRestarted();

    if (!canBeRestarted) {
      console.log("Can not be restarted!");
      return;
    }

    setActivePlayer("");
    setRestarting(true);
    setPlaying(false);

    setTimeout(() => {
      setDiceNumber(null);
      setActivePlayer(1);
      setPlayer1Score({ current: 0, total: 0 });
      setPlayer2Score({ current: 0, total: 0 });
      setWinner(null);
      setRestarting(false);
      setPlaying(true);
    }, 2000);
  };

  useEffect(() => {
    if (player1Score.current >= 20 || player1Score.total >= 20) {
      setWinner(1);
      restartHandler();
    }
    if (player2Score.current >= 20 || player2Score.total >= 20) {
      setWinner(2);
      restartHandler();
    }
  }, [player1Score, player2Score]);

  const context = {
    playing,
    activePlayer,
    diceNumber,
    player1: player1Score,
    player2: player2Score,
    winner,
    restarting,
    rollDice: rollDiceHandler,
    holdPoints: holdDiceHandler,
    restart: restartHandler,
  };

  return (
    <GameContext.Provider value={context}>
      {props.children}
    </GameContext.Provider>
  );
};

export default ContextProvider;
