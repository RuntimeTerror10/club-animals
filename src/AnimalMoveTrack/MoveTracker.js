import { useContext, useState } from "react";
import { GameCtx } from "../GameContext/GameContext";

export const MoveTracker = () => {
  const ctx = useContext(GameCtx);
  const [undoCount, setUndoCount] = useState(3);

  const resetGameHandler = () => {
    ctx.resetGame();
    setUndoCount(3);
  };

  const undoMoveHandler = () => {
    if (ctx.moves.length > 0 && undoCount > 0) {
      ctx.undoMove();
      setUndoCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div>
      <h1 style={{ color: "#fff" }}>MoveTracker</h1>
      {ctx.moves.map((move) => (
        <h2 style={{ color: "#fff" }} key={move.id}>
          {move.name}
        </h2>
      ))}
      {ctx.isGameOver && (
        <button onClick={() => resetGameHandler()}>Reset</button>
      )}
      <button onClick={undoMoveHandler}>Undo ({undoCount})</button>
    </div>
  );
};
