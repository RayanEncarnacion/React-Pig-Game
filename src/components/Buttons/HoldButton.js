const HoldButton = (props) => {
  return (
    <button onClick={props.onClick} className="new-game">
      <i className="fas fa-hand-holding-medical"></i> HOLD
    </button>
  );
};

export default HoldButton;
