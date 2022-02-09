import { StyledMenu } from "./Menu.styled";
import { motion } from "framer-motion";
import githubLogo from "../assets/github.svg";
import click from "../assets/sounds/click.mp3";

export const Menu = (props) => {
  const clickSound = new Audio(click);

  const startGameHandler = () => {
    clickSound.play();
    props.onStartGame();
  };

  return (
    <StyledMenu>
      <div className="menuContainer">
        <a
          href="https://github.com/RuntimeTerror10"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          <img src={githubLogo} alt="github" className="github-logo" />
        </a>
        <motion.div
          initial={{ scale: 0, y: -100, transition: { duration: 0.4 } }}
          animate={{
            scale: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.3 },
          }}
          transition={{
            type: "spring",
          }}
          className="game-title"
        >
          CLUB ANIMALS
        </motion.div>
        <motion.div
          initial={{ scale: 0, y: 100, transition: { duration: 0.4 } }}
          animate={{
            scale: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.3 },
          }}
          transition={{
            type: "spring",
          }}
          className="menu-btns"
        >
          <button className="start-btn" onClick={startGameHandler}>
            Start Game
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { duration: 0.3, delay: 0.8 },
        }}
        transition={{
          type: "spring",
        }}
        className="footer-info"
      >
        <span className="made-by">Made by - </span>
        <span className="name">
          <a
            href="https://twitter.com/parth_codes"
            target="_blank"
            rel="noreferrer"
          >
            Parth Bhardwaj
          </a>
        </span>
      </motion.div>
    </StyledMenu>
  );
};
