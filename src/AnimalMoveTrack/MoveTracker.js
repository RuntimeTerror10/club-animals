import { useContext } from "react";
import { GameCtx } from "../GameContext/GameContext";
import { StyledMoveTracker } from "./MoveTracker.styled";
import { motion } from "framer-motion";

export const MoveTracker = () => {
  const ctx = useContext(GameCtx);
  // const [undoCount, setUndoCount] = useState(3);
  const variants = {
    visible: { scale: 1, transition: { duration: 0.25 } },
    hidden: { scale: 0, transition: { duration: 0.25 } },
  };
  const resetGameHandler = () => {
    ctx.resetGame();
    //setUndoCount(3);
  };
  /*
  const undoMoveHandler = () => {
    if (ctx.moves.length > 0 && undoCount > 0) {
      ctx.undoMove();
      setUndoCount((prevCount) => prevCount - 1);
    }
  };
  */
  return (
    <StyledMoveTracker>
      <div className="movesContainer">
        {ctx.moves.map((move) => (
          <motion.div
            key={move.id}
            animate="visible"
            initial="hidden"
            variants={variants}
            className="animalMove"
          >
            {move.img}
          </motion.div>
        ))}
      </div>

      {ctx.isGameOver && (
        <button onClick={() => resetGameHandler()}>Reset</button>
      )}
      {/* <button onClick={undoMoveHandler}>Undo ({undoCount})</button> */}
    </StyledMoveTracker>
  );
};
