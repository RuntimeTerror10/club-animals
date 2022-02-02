import { AnimalButton } from "./AnimalButton/AnimalButton";
import { StyledGrid } from "./AnimalGrid.styled";
import { useContext, useState, useEffect } from "react";
import { GameCtx } from "../GameContext/GameContext";
import Confetti from "react-confetti";

export const AnimalGrid = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  const ctx = useContext(GameCtx);
  let keyPrefix = "animal";
  let counter = 0;

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  return (
    <StyledGrid>
      {ctx.isGameOver ? (
        <Confetti
          recycle={false}
          numberOfPieces={500}
          width={width}
          height={height}
        />
      ) : null}
      {ctx.grid.map((button) => {
        counter++;
        return (
          <AnimalButton
            name={button.name}
            img={button.img}
            key={keyPrefix + counter}
            btnId={keyPrefix + counter}
          />
        );
      })}
    </StyledGrid>
  );
};
