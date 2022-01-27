import { AnimalButton } from "./AnimalButton/AnimalButton";
import { StyledGrid } from "./AnimalGrid.styled";
import { useContext } from "react";
import { GameCtx } from "../GameContext/GameContext";

export const AnimalGrid = () => {
  const ctx = useContext(GameCtx);

  const generateRandomKey = () => {
    return `animal${Math.floor(Math.random() * 100000)}`;
  };

  return (
    <StyledGrid>
      {ctx.grid.map((button) => {
        let animalKey = generateRandomKey();
        return <AnimalButton name={button.name} key={animalKey} />;
      })}
    </StyledGrid>
  );
};
