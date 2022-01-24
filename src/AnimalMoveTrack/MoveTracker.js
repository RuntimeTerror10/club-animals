import { useContext } from "react";
import { MoveCtx } from "../MoveContext/MoveContext";

export const MoveTracker = () => {
  const ctx = useContext(MoveCtx);
  return (
    <div>
      <h1>MoveTracker</h1>
      {ctx.moves.map((move) => (
        <p key={move.id}>{move.name}</p>
      ))}
    </div>
  );
};
