import { Modal } from "../Components/Modal/Modal";
import happy from "../assets/happy.svg";
import { useState, useContext } from "react";
import { GameCtx } from "../GameContext/GameContext";
import { StyledResult } from "./GameResult.styled";

export const GameResult = (props) => {
  const [isReset, setIsReset] = useState(false);
  const ctx = useContext(GameCtx);

  const ResetGameHandler = () => {
    setIsReset(true);
    props.onReset();
    setTimeout(() => {
      ctx.resetGame();
    }, 200);
  };

  const goToMenuHandler = () => {
    props.onGoBackToMenu();
  };

  return (
    <>
      {ctx.isGameOver ? (
        <Modal isReset={isReset}>
          <StyledResult>
            <div className="modal-content">
              <div className="modal-header" style={{ background: "#3cb371" }}>
                <img src={happy} alt="happy cat"></img>
                <h1 className="outcome">All Clear in {ctx.moveCount} moves!</h1>
              </div>
              <div className="action-container">
                <button className="reset-btn" onClick={ResetGameHandler}>
                  Reset
                </button>
                <button className="menu-btn" onClick={goToMenuHandler}>
                  Menu
                </button>
              </div>
            </div>
          </StyledResult>
        </Modal>
      ) : null}
    </>
  );
};
