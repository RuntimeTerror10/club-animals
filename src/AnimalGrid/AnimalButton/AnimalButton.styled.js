import styled from "styled-components";

export const StyledAnimalButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 8px;
  width: var(--width);
  height: var(--height);
  padding: 0px;
  margin: 2px;
  cursor: pointer;
  perspective: 1000px;

  .flipCardInner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.25s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transform: ${(props) => (props.isFlipped ? "rotateY(180deg)" : "")};
  }
`;
