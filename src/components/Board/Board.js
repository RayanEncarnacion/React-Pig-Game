import Dice from "../Dice/Dice";
import Player1 from "../Players/Player-1";
import Player2 from "../Players/Player-2";
import Buttons from "../Buttons/Buttons";
import { board } from "./Board.module.css";
import { useContext } from "react";
import GameContext from "../../store/context-store";

const Board = (props) => {
  const context = useContext(GameContext);

  return (
    <div>
      <Dice />
      <div className={board}>
        <Player1 />
        <Buttons
          roll={context.rollDice}
          hold={context.holdPoints}
          restart={context.restart}
        />
        <Player2 />
      </div>
    </div>
  );
};

export default Board;
