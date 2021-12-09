const NewGameButton = (props) => {
  return (
    <button onClick={props.onClick} className="new-game">
      <i className="fas fa-redo-alt"></i> NEW GAME
    </button>
  );
};

export default NewGameButton;
