import { useState, useEffect } from "react";
import { animals } from "../AnimalData/animals";
import { checkMoves } from "./checkMoves";
import { createGridHandler } from "../AnimalGrid/createGrid";
import { GameCtx } from "./GameContext";

const initialGameState = {
  grid: createGridHandler(animals),
  clicked: [],
  moves: [],
  isGameOver: false,
};

export const MoveContextProvider = (props) => {
  const [gameState, setGameState] = useState(initialGameState);

  const resetGameHandler = () => {
    setGameState({
      grid: createGridHandler(animals),
      moves: [],
      clicked: [],
      isGameOver: false,
    });
  };

  const undoMoveHandler = () => {
    gameState.moves.pop();
    gameState.clicked.pop();
    setGameState((prevState) => ({
      ...prevState,
    }));
  };

  const addMoveToTrackerHandler = (newMove) => {
    if (gameState.moves.length < 3) {
      // If the move is not found in the gameState, add it
      setGameState((prevState) => {
        return {
          ...prevState,
          moves: [...prevState.moves, newMove],
        };
      });
    }
  };

  useEffect(() => {
    if (gameState.moves.length === 3) {
      const isMatch = checkMoves(gameState.moves);
      if (!isMatch) {
        setTimeout(() => {
          setGameState((prevState) => {
            return {
              ...prevState,
              moves: [],
              isGameOver: true,
            };
          });
          alert("Out of moves");
        }, 500);
      } else {
        setTimeout(() => {
          setGameState((prevState) => {
            return {
              ...prevState,
              moves: [],
              isGameOver: false,
            };
          });
        }, 500);
      }
    }
  }, [gameState.moves]);

  const GameContext = {
    grid: gameState.grid,
    clicked: gameState.clicked,
    moves: gameState.moves,
    isGameOver: gameState.isGameOver,
    addMove: addMoveToTrackerHandler,
    resetGame: resetGameHandler,
    undoMove: undoMoveHandler,
  };

  return (
    <GameCtx.Provider value={GameContext}>{props.children}</GameCtx.Provider>
  );
};
