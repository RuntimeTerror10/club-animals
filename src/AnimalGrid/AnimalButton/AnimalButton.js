import { useContext } from "react";
import { MoveCtx } from "../../MoveContext/MoveContext";
import { StyledAnimalButton } from "./AnimalButton.styled";

export const AnimalButton = (props) => {
  const ctx = useContext(MoveCtx);

  const addAnimalToTracker = (event) => {
    const moveID = `button${Math.floor(Math.random() * 500)}`;
    const name = event.target.innerText;
    const move = { id: moveID, name: name };
    ctx.addMove(move);
  };

  return (
    <StyledAnimalButton onClick={addAnimalToTracker}>
      {props.name}
    </StyledAnimalButton>
  );
};
