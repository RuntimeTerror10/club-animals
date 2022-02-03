import styled from "styled-components";

export const StyledAnimalButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 100px;
  padding: 0;
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
  @media (min-width: 300px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 420px) {
    width: 75px;
    height: 75px;
  }

  @media (min-width: 660px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1000px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 1600px) {
    width: 150px;
    height: 150px;
  }
  @media (min-width: 1900px) {
    width: 180px;
    height: 180px;
  }
`;
