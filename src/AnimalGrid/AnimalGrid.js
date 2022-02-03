import { AnimalButton } from "./AnimalButton/AnimalButton";
import { StyledGrid } from "./AnimalGrid.styled";
import { useContext } from "react";
import { GameCtx } from "../GameContext/GameContext";

export const AnimalGrid = () => {
  const ctx = useContext(GameCtx);
  let keyPrefix = "animal";

  return (
    <StyledGrid>
      {ctx.grid.map((button, index) => {
        return (
          <AnimalButton
            name={button.name}
            img={button.img}
            key={keyPrefix + index}
            btnId={keyPrefix + index}
          />
        );
      })}
    </StyledGrid>
  );
};
