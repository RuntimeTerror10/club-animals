import { useState, useEffect, useContext } from "react";
import { GameCtx } from "../../GameContext/GameContext";
import { StyledAnimalButton } from "./AnimalButton.styled";
import { ButtonFront } from "./ButtonFront";
import { ButtonBack } from "./ButtonBack";
import click from "../../assets/sounds/click.mp3";

export const AnimalButton = (props) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const ctx = useContext(GameCtx);
  const clickSound = new Audio(click);

  const handleButtonClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      clickSound.play();
      ctx.addMove({ id: props.btnId, name: props.name });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(false);
    }, 800);
  }, []);

  useEffect(() => {
    if (ctx.matched.includes(props.btnId)) {
      setIsFlipped(true);
    } else {
      setIsDisabled(true);
      setTimeout(() => {
        setIsFlipped(false);
        setIsDisabled(false);
      }, 800);
    }
  }, [ctx.matched, props.btnId]);
  return (
    <StyledAnimalButton
      id={props.btnId}
      onClick={isDisabled ? null : handleButtonClick}
      isFlipped={isFlipped}
    >
      <div className="flipCardInner">
        <ButtonFront />
        <ButtonBack animalImg={props.img} />
      </div>
    </StyledAnimalButton>
  );
};
