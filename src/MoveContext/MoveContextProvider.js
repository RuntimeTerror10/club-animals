import { useState } from "react";
import { MoveCtx } from "./MoveContext";

const initialMoveTrackerState = {
  moves: [],
  max: 3,
};

export const MoveContextProvider = (props) => {
  const [moveTracker, setMoveTracker] = useState(initialMoveTrackerState);
  console.log(moveTracker.moves.length);
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
    setTimeout(() => {
      if (moveTracker.moves.length == 2) {
        setMoveTracker({
          moves: [],
          max: 3,
        });
      }
    }, 800);
  };

  const MoveContext = {
    moves: moveTracker.moves,
    max: moveTracker.max,
    addMove: addMoveToTrackerHandler,
  };

  return (
    <MoveCtx.Provider value={MoveContext}>{props.children}</MoveCtx.Provider>
  );
};
