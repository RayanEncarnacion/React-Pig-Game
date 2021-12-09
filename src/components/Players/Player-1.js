import { useContext } from "react";
import GameContext from "../../store/context-store";
import classes from "./Players.module.css";

const Player1 = () => {
  const context = useContext(GameContext);

  const playerClasses =
    context.activePlayer === 1
      ? `${classes.player} ${classes.active}`
      : `${classes.player}`;

  const winner = context.winner === 1 ? `${classes.winner}` : "";

  return (
    <div className={`${playerClasses} ${winner}`}>
      <h1>Player 1</h1>
      <p className={classes["total-score"]}>{context.player1.total}</p>
      <div className={classes["current"]}>
        <h3>CURRENT</h3>
        <p className={classes["current-score"]}>{context.player1.current}</p>
      </div>
    </div>
  );
};

export default Player1;
