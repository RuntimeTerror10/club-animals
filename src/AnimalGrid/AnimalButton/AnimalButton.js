import { useContext } from "react";
import { GameCtx } from "../../GameContext/GameContext";
import { StyledAnimalButton } from "./AnimalButton.styled";
import { motion } from "framer-motion";

export const AnimalButton = (props) => {
  const ctx = useContext(GameCtx);
  const variants = {
    visible: { scale: 1, transition: { duration: 0.25 } },
    hidden: { scale: 0, transition: { duration: 0.25 } },
  };
  const addAnimalToTracker = () => {
    const moveID = `button${Math.floor(Math.random() * 500)}`;
    const name = props.name;
    const move = { id: moveID, name: name, img: props.img };
    ctx.addMove(move);
    ctx.clicked.push(props.btnId);
  };
  return (
    <motion.div
      initial={ctx.clicked.includes(props.btnId) ? "hidden" : "visible"}
      animate={ctx.clicked.includes(props.btnId) ? "hidden" : "visible"}
      variants={variants}
    >
      <StyledAnimalButton
        id={props.btnId}
        onClick={addAnimalToTracker}
        disabled={ctx.clicked.includes(props.btnId)}
      >
        <div className="animalImage">{props.img}</div>
      </StyledAnimalButton>
    </motion.div>
  );
};
