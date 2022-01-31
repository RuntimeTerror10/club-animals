import { StyledMenu } from "./Menu.styled";

export const Menu = (props) => {
  return (
    <StyledMenu>
      <div className="menuContainer">
        <h1>CLUB ANIMALS</h1>
        <div className="menuBtns">
          <button className="startBtn" onClick={props.onStartGame}>
            Start Game
          </button>
          <button className="instructionBtn">How to Play</button>
        </div>
      </div>
    </StyledMenu>
  );
};
