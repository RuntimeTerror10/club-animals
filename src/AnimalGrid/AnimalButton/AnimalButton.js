import { useContext } from "react";
import { GameCtx } from "../../GameContext/GameContext";
import { StyledAnimalButton } from "./AnimalButton.styled";

export const AnimalButton = (props) => {
  const ctx = useContext(GameCtx);

  const addAnimalToTracker = () => {
    const moveID = `button${Math.floor(Math.random() * 500)}`;
    const name = props.name;
    const move = { id: moveID, name: name };
    ctx.addMove(move);
    ctx.clicked.push(props.btnId);
  };
  return (
    <StyledAnimalButton
      id={props.btnId}
      onClick={addAnimalToTracker}
      disabled={ctx.clicked.includes(props.btnId)}
      isVisible={ctx.clicked.includes(props.btnId)}
    >
      <div className="animalImage">{props.img}</div>
    </StyledAnimalButton>
  );
};
