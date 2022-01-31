import { Modal } from "./Modal";
import { motion } from "framer-motion";
import happy from "../../assets/happy.svg";
import sad from "../../assets/sad.svg";
import { useContext } from "react";
import { GameCtx } from "../../GameContext/GameContext";
import { StyledResult } from "./GameResult.styled";

export const GameResult = (props) => {
  const ctx = useContext(GameCtx);

  const variants = {
    visible: { scale: 1, transition: { duration: 0.2 } },
    hidden: { scale: 0, transition: { duration: 0.2 } },
  };

  const resetGameHandler = () => {
    ctx.resetGame();
    props.onReset();
  };
  return (
    <Modal>
      <StyledResult>
        <motion.div
          className="modalContainer"
          animate="visible"
          initial="hidden"
          variants={variants}
        >
          {ctx.clicked.length === 84 ? (
            <div className="modalContent">
              <div className="modalHeader" style={{ background: "#3cb371" }}>
                <img src={happy} alt="happy cat"></img>
                <h1 className="outcome">You Won!</h1>
              </div>
            </div>
          ) : (
            <div className="modalContent">
              <div className="modalHeader" style={{ background: "#ff5349" }}>
                <img src={sad} alt="sad cat"></img>
                <h1 className="outcome">Out Of Moves!</h1>
              </div>
            </div>
          )}
          <div className="actionContainer">
            <button onClick={resetGameHandler} className="resetBtn">
              Reset
            </button>
            <button className="menuBtn">Menu</button>
          </div>
        </motion.div>
      </StyledResult>
    </Modal>
  );
};
