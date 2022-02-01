import { Modal } from "./Modal";
import happy from "../../assets/happy.svg";
import sad from "../../assets/sad.svg";
import { useContext, useState } from "react";
import { GameCtx } from "../../GameContext/GameContext";
import { StyledResult } from "./GameResult.styled";

export const GameResult = (props) => {
  const [isReset, setIsReset] = useState(false);
  const ctx = useContext(GameCtx);

  const resetGameHandler = () => {
    setIsReset(true);
    props.onReset();
    setTimeout(() => {
      ctx.resetGame();
    }, 500);
  };

  const goToMenuHandler = () => {
    props.onGoBackToMenu();
  };

  return (
    <Modal isReset={isReset}>
      <StyledResult>
        {ctx.clicked.length === 78 ? (
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
          <button onClick={goToMenuHandler} className="menuBtn">
            Menu
          </button>
        </div>
      </StyledResult>
    </Modal>
  );
};
