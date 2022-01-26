import { useState, useEffect } from "react";
import { MoveCtx } from "./MoveContext";

const initialMoveTrackerState = {
  moves: [],
  max: 3,
};

export const MoveContextProvider = (props) => {
  const [moveTracker, setMoveTracker] = useState(initialMoveTrackerState);

  const addMoveToTrackerHandler = (newMove) => {
    if (moveTracker.moves.length < moveTracker.max) {
      const isFound = moveTracker.moves.findIndex(
        (move) => move.name === newMove.name
      );
      // If the move is not found in the moveTracker, add it
      if (isFound === -1) {
        setMoveTracker((prevState) => {
          return {
            moves: [...prevState.moves, newMove],
            max: 3,
          };
        });
      } else {
        //if the move is already in the list, add next to it
        const animalIndex = isFound;
        let updatedMoves = [...moveTracker.moves];
        updatedMoves.splice(animalIndex, 0, newMove);
        setMoveTracker({
          moves: updatedMoves,
          max: 3,
        });
      }
    }
  };

  const MoveContext = {
    moves: moveTracker.moves,
    max: moveTracker.max,
    addMove: addMoveToTrackerHandler,
  };

  const checkMoves = (moves) => {
    const animal = moves[0].name;
    const isMatch = moves.every((move) => move.name === animal);
    return isMatch;
  };

  useEffect(() => {
    if (moveTracker.moves.length === moveTracker.max) {
      const isMatch = checkMoves(moveTracker.moves);
      if (isMatch) {
        setTimeout(() => {
          setMoveTracker({
            moves: [],
            max: 3,
          });
        }, 500);
      } else {
        alert("Out of Moves!");
      }
    }
  }, [moveTracker.moves]);

  return (
    <MoveCtx.Provider value={MoveContext}>{props.children}</MoveCtx.Provider>
  );
};
