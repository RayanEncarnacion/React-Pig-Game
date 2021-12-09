import React from "react";

const GameContext = React.createContext({
  playing: Boolean,
  activePlayer: Number,
  diceNumber: Number,
  player1: {
    current: Number,
    total: Number,
  },
  player2: {
    current: Number,
    total: Number,
  },
  winner: Number,
  restarting: Boolean,
  rollDice: () => {},
  holdPoints: () => {},
  restart: () => {},
});

export default GameContext;
