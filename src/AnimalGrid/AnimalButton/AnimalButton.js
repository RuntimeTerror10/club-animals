import { useContext, useState } from "react";
import { GameCtx } from "../../GameContext/GameContext";
import { StyledAnimalButton } from "./AnimalButton.styled";

export const AnimalButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const ctx = useContext(GameCtx);

  const addAnimalToTracker = (event) => {
    setIsClicked(true);
    const moveID = `button${Math.floor(Math.random() * 500)}`;
    const name = event.target.innerText;
    const move = { id: moveID, name: name };
    ctx.addMove(move);
  };

  return (
    <StyledAnimalButton
      onClick={addAnimalToTracker}
      disabled={isClicked ? true : false}
      isVisible={isClicked ? false : true}
    >
      {props.name}
    </StyledAnimalButton>
  );
};
