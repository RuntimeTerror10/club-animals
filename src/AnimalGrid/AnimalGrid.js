import { AnimalButton } from "./AnimalButton/AnimalButton";
import { StyledGrid } from "./AnimalGrid.styled";
import { useContext } from "react";
import { GameCtx } from "../GameContext/GameContext";

export const AnimalGrid = () => {
  const ctx = useContext(GameCtx);
  let keyPrefix = "animal";
  let counter = 0;

  return (
    <StyledGrid>
      {ctx.grid.map((button) => {
        counter++;
        return (
          <AnimalButton
            name={button.name}
            key={keyPrefix + counter}
            btnId={keyPrefix + counter}
          />
        );
      })}
    </StyledGrid>
  );
};
