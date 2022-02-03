import { useState, useEffect, useMemo } from "react";
import { animals } from "../animals";
import { createGrid } from "../AnimalGrid/createGrid";
import { GameCtx } from "./GameContext";
import gameWin from "../assets/sounds/gameWin.mp3";
import match from "../assets/sounds/match.mp3";

const initialGameState = {
  grid: createGrid(animals),
  moves: [],
  matched: [],
  isGameOver: false,
};

export const GameContextProvider = (props) => {
  const [gameState, setGameState] = useState(initialGameState);
  const gameWinSound = useMemo(() => new Audio(gameWin), []);
  const matchSound = useMemo(() => new Audio(match), []);

  const addMoveHandler = (newMove) => {
    if (gameState.moves.length < 2) {
      setGameState((prevState) => ({
        ...prevState,
        moves: [...prevState.moves, newMove],
      }));
    }
  };

  const checkMoves = () => {
    const [firstMove, secondMove] = gameState.moves;
    if (firstMove.name === secondMove.name) {
      setGameState((prevState) => ({
        ...prevState,
        matched: [...prevState.matched, firstMove.id, secondMove.id],
        moves: [],
      }));
      matchSound.play();
    } else {
      setGameState((prevState) => ({
        ...prevState,
        matched: [...prevState.matched],
        moves: [],
      }));
    }
  };

  if (gameState.moves.length === 2) {
    checkMoves();
  }

  const resetGameHandler = () => {
    setGameState({
      grid: createGrid(animals),
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
        grid: createGrid(animals),
        moves: [],
        matched: [],
        isGameOver: false,
      });
    }
  }, [props.isMenuVisible]);

  useEffect(() => {
    if (gameState.matched.length === animals.length * 2) {
      setGameState((prevState) => ({
        ...prevState,
        isGameOver: true,
      }));
      gameWinSound.play();
      setTimeout(() => {
        props.onGameOver();
      }, 500);
    }
  }, [gameState.matched, props, gameWinSound]);

  return (
    <GameCtx.Provider value={GameContext}>{props.children}</GameCtx.Provider>
  );
};
