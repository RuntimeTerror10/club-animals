import { useState, useEffect } from "react";
import { animals } from "../AnimalData/animals";
import { createGridHandler } from "../AnimalGrid/createGrid";
import { GameCtx } from "./GameContext";

const initialGameState = {
  grid: createGridHandler(animals),
  moves: [],
  matched: [],
  isGameOver: false,
};

export const MoveContextProvider = (props) => {
  const [gameState, setGameState] = useState(initialGameState);

  const addMoveHandler = (newMove) => {
    if (gameState.moves.length < 2) {
      setGameState((prevState) => ({
        ...prevState,
        moves: [...prevState.moves, newMove],
      }));
    }
  };

  const GameContext = {
    grid: gameState.grid,
    moves: gameState.moves,
    matched: gameState.matched,
    isGameOver: gameState.isGameOver,
    addMove: addMoveHandler,
  };
  console.log(gameState.moves, gameState.matched);

  useEffect(() => {
    if (gameState.moves.length === 2) {
      const [firstMove, secondMove] = gameState.moves;
      if (firstMove.name === secondMove.name) {
        setGameState((prevState) => ({
          ...prevState,
          matched: [...prevState.matched, firstMove.id, secondMove.id],
          moves: [],
        }));
      } else {
        setGameState((prevState) => ({
          ...prevState,
          matched: [...prevState.matched],
          moves: [],
        }));
      }
    }
  }, [gameState.moves]);
  return (
    <GameCtx.Provider value={GameContext}>{props.children}</GameCtx.Provider>
  );
};
