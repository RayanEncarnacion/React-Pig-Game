import NewGameButton from "../Buttons/NewGameButton";
import HoldButton from "../Buttons/HoldButton";
import RollButton from "../Buttons/RollButton";
import classes from "./Buttons.module.css";

///////////////////////////// Dice work
//// Roll and Hold work

const Buttons = (props) => {
  return (
    <div className={classes["buttons-container"]}>
      <RollButton onClick={props.roll} />
      <HoldButton onClick={props.hold} />
      <NewGameButton onClick={props.restart} />
    </div>
  );
};

export default Buttons;
