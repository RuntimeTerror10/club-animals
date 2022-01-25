import { useContext, useState } from "react";
import { MoveCtx } from "../../MoveContext/MoveContext";
import { StyledAnimalButton } from "./AnimalButton.styled";

export const AnimalButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const ctx = useContext(MoveCtx);

  const addAnimalToTracker = (event) => {
    const moveID = `button${Math.floor(Math.random() * 500)}`;
    const name = event.target.innerText;
    const move = { id: moveID, name: name };
    ctx.addMove(move);
    setIsClicked(true);
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
