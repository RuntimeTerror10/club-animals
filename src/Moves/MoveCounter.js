import styled from "styled-components";
import { useContext } from "react";
import { GameCtx } from "../GameContext/GameContext";

const StyledMoveCounter = styled.div`
  text-align: center;
  color: #fbfbfb;
  font-family: "DiloWorld";
  font-size: 3.5rem;
`;

export const MoveCounter = () => {
  const ctx = useContext(GameCtx);
  return <StyledMoveCounter>Moves : {ctx.moveCount}</StyledMoveCounter>;
};
