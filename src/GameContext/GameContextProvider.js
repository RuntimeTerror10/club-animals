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

  const resetGameHandler = () => {
    setGameState({
      grid: createGridHandler(animals),
      moves: [],
      matched: [],
      isGameOver: false,
    });
  };

  const GameContext = {
    grid: gameState.grid,
    moves: gameState.moves,
    matched: gameState.matched,
    isGameOver: gameState.isGameOver,
    addMove: addMoveHandler,
    resetGame: resetGameHandler,
  };

  useEffect(() => {
    if (!props.isMenuVisible) {
      setGameState({
        grid: createGridHandler(animals),
        moves: [],
        matched: [],
        isGameOver: false,
      });
    }
  }, [props.isMenuVisible]);

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

  useEffect(() => {
    if (gameState.matched.length === animals.length * 2) {
      setGameState((prevState) => ({
        ...prevState,
        isGameOver: true,
      }));
      setTimeout(() => {
        props.onGameOver();
      }, 1000);
    }
  }, [gameState.matched, props]);

  return (
    <GameCtx.Provider value={GameContext}>{props.children}</GameCtx.Provider>
  );
};
