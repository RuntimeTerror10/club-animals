import { AnimalButton } from "./AnimalButton/AnimalButton";
import { StyledGrid } from "./AnimalGrid.styled";
import { grid } from "./AnimalGrid.styled";
import { motion } from "framer-motion";
import { useContext } from "react";
import { GameCtx } from "../GameContext/GameContext";

export const AnimalGrid = () => {
  const ctx = useContext(GameCtx);
  let keyPrefix = "animal";
  let counter = 0;
  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <StyledGrid>
      <motion.div
        style={grid}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeOut", duration: 0.15 }}
      >
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
      </motion.div>
    </StyledGrid>
  );
};
