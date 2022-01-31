import { useContext } from "react";
import undo from "../assets/undo.svg";
import { GameCtx } from "../GameContext/GameContext";
import { StyledUndoButton } from "./UndoButton.styled";

export const UndoButton = () => {
  const ctx = useContext(GameCtx);
  const undoMoveHandler = () => {
    if (ctx.moves.length > 0 && ctx.undoCount > 0) {
      ctx.undoMove();
    }
  };

  return (
    <StyledUndoButton onClick={undoMoveHandler}>
      <span>
        <img className="undo" src={undo} alt="undo move"></img>
      </span>
      <span className="badge">{ctx.undoCount}</span>
    </StyledUndoButton>
  );
};
