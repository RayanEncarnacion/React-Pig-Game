import { useContext } from "react";
import GameContext from "../../store/context-store";
import classes from "./Dice.module.css";

///////////////////////////// Dice work

const Dice = (props) => {
  const context = useContext(GameContext);

  let content = <h1>Roll Dice to Start!</h1>;

  if (context.restarting)
    content = <h1 className={classes["header-text"]}>Restarting...</h1>;

  if (context.diceNumber)
    content = (
      <img
        src={process.env.PUBLIC_URL + `/images/dice-${context.diceNumber}.png`}
        alt={`Dice number ${context.diceNumber}`}
      ></img>
    );
  if (context.winner)
    content = (
      <h1
        className={classes["header-text"]}
      >{`Player ${context.winner} Wins!!!`}</h1>
    );
  if (context.diceNumber === 0)
    content = <h1 className={classes["header-text"]}>Change Player!</h1>;

  return <div className={classes["img-container"]}>{content}</div>;
};

export default Dice;
