import { useContext } from "react";
import { UndoButton } from "./UndoButton";
import { GameCtx } from "../GameContext/GameContext";
import { StyledMoveTracker } from "./MoveTracker.styled";
import { motion } from "framer-motion";

export const MoveTracker = (props) => {
  const ctx = useContext(GameCtx);
  const variants = {
    visible: { scale: 1, transition: { duration: 0.25 } },
    hidden: { scale: 0, transition: { duration: 0.25 } },
  };

  return (
    <StyledMoveTracker>
      <div className="movesContainer">
        {ctx.moves.map((move) => (
          <motion.div
            key={move.id}
            animate={ctx.moves.length === 3 ? "hidden" : "visible"}
            initial={ctx.moves.length === 3 ? "visible" : "hidden"}
            variants={variants}
            className="animalMove"
          >
            {move.img}
          </motion.div>
        ))}
      </div>
      <UndoButton />
    </StyledMoveTracker>
  );
};
