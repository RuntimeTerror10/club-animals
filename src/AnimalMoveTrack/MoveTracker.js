import { useContext } from "react";
import { MoveCtx } from "../MoveContext/MoveContext";

export const MoveTracker = () => {
  const ctx = useContext(MoveCtx);
  return (
    <div>
      <h1 style={{ color: "#fff" }}>MoveTracker</h1>
      {ctx.moves.map((move) => (
        <h2 style={{ color: "#fff" }} key={move.id}>
          {move.name}
        </h2>
      ))}
    </div>
  );
};
