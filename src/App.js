import React from "react";
import Board from "./components/Board/Board";
import ContextProvider from "./store/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Board />
    </ContextProvider>
  );
}

export default App;
