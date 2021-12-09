const RollButton = (props) => {
  return (
    <button onClick={props.onClick}>
      <i className="fas fa-dice"></i>ROLL DICE
    </button>
  );
};

export default RollButton;
