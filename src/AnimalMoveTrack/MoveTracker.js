import { useContext } from "react";
import { GameCtx } from "../GameContext/GameContext";

export const MoveTracker = () => {
  const ctx = useContext(GameCtx);
  console.log("render");
  const resetGameHandler = () => {
    ctx.resetGame();
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
    </div>
  );
};
