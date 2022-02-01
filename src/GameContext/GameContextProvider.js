import { useState, useEffect } from "react";
import { animals } from "../AnimalData/animals";
import { checkMoves } from "./checkMoves";
import { createGridHandler } from "../AnimalGrid/createGrid";
import { GameCtx } from "./GameContext";

const initialGameState = {
  grid: createGridHandler(animals),
  moves: [],
  clicked: [],
  isGameOver: false,
  undoCount: 3,
};

export const MoveContextProvider = (props) => {
  const [gameState, setGameState] = useState(initialGameState);

  const resetGameHandler = () => {
    setGameState({
      grid: createGridHandler(animals),
      moves: [],
      clicked: [],
      isGameOver: false,
      undoCount: 3,
    });
  };

  const undoMoveHandler = () => {
    gameState.moves.pop();
    gameState.clicked.pop();
    setGameState((prevState) => ({
      ...prevState,
      undoCount: prevState.undoCount - 1,
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
        }, 200);
        props.onGameOver();
      } else {
        setTimeout(() => {
          setGameState((prevState) => {
            return {
              ...prevState,
              moves: [],
              isGameOver: false,
            };
          });
        }, 350);
      }
    }
  }, [gameState.moves]);

  useEffect(() => {
    if (!props.isMenuOpen) {
      setGameState({
        grid: createGridHandler(animals),
        moves: [],
        clicked: [],
        isGameOver: false,
        undoCount: 3,
      });
    }
  }, [props.isMenuOpen]);

  useEffect(() => {
    if (gameState.clicked.length === 78) {
      props.onGameOver();
    }
  }, [gameState.clicked.length]);

  const GameContext = {
    grid: gameState.grid,
    moves: gameState.moves,
    clicked: gameState.clicked,
    undoCount: gameState.undoCount,
    isGameOver: gameState.isGameOver,
    addMove: addMoveToTrackerHandler,
    resetGame: resetGameHandler,
    undoMove: undoMoveHandler,
  };

  return (
    <GameCtx.Provider value={GameContext}>{props.children}</GameCtx.Provider>
  );
};
