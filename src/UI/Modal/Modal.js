import { motion } from "framer-motion";
import { StyledModal } from "./Modal.styled";

export const Modal = (props) => {
  const variants = {
    visible: { scale: 1, transition: { duration: 0.2 } },
    hidden: { scale: 0, transition: { duration: 0.2 } },
  };

  return (
    <StyledModal>
      <motion.div
        className="modalContainer"
        animate={props.isReset ? "hidden" : "visible"}
        initial={props.isReset ? "visible" : "hidden"}
        variants={variants}
      >
        {props.children}
      </motion.div>
    </StyledModal>
  );
};
