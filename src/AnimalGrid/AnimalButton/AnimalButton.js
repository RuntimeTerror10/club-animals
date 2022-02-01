import { useState, useEffect, useContext } from "react";
import { GameCtx } from "../../GameContext/GameContext";
import { StyledAnimalButton } from "./AnimalButton.styled";
import { ButtonFront } from "./ButtonFront";
import { ButtonBack } from "./ButtonBack";

export const AnimalButton = (props) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const ctx = useContext(GameCtx);

  const handleButtonClick = () => {
    setIsFlipped(true);
    ctx.addMove({ id: props.btnId, name: props.name });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (ctx.matched.includes(props.btnId)) {
      setIsFlipped(true);
    } else {
      setTimeout(() => {
        setIsFlipped(false);
      }, 1000);
    }
  }, [ctx.matched]);
  return (
    <StyledAnimalButton
      id={props.btnId}
      onClick={handleButtonClick}
      isFlipped={isFlipped}
    >
      <div className="flipCardInner">
        <ButtonFront />
        <ButtonBack animalImg={props.img} />
      </div>
    </StyledAnimalButton>
  );
};
