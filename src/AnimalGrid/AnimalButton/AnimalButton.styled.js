import styled from "styled-components";

export const StyledAnimalButton = styled.button`
  visibility: ${(props) => (props.isVisible ? "hidden" : "visible")};
  position: relative;
  cursor: pointer;
  outline: none;
  border: 1px solid #191919;
  vertical-align: middle;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 6px;
  border-radius: 12px;
  background: #fbfbfb;
  transform-style: preserve-3d;
  transition: all 0.15s ease-in-out;
  &::before {
    opacity: ${(props) => (props.isVisible ? 0 : 1)};
    visibility: ${(props) => (props.isVisible ? "hidden" : "visible")};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fbab60;
    border-radius: inherit;
    transform: translate3d(0, 0.5em, -1em);
    transition: all 0.15s;
  }
  &:hover {
    transform: translate(0, 0.17em);
  }
  &:hover::before {
    transform: translate3d(0, 0.3em, -1em);
  }
  &:active {
    transform: translate(0, 0.3em);
  }
  &:active::before {
    transform: translate3d(0, 0, -1em);
  }

  @media (min-width: 300px) {
    font-size: 1.3rem;
    margin-top: 2px;
    border-radius: 5px;
    .animalImage {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 460px) {
    font-size: 1.5rem;
    margin-top: 3px;
    border-radius: 5px;
    .animalImage {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 660px) {
    font-size: 1.5rem;
    margin-top: 3px;
    border-radius: 10px;
    .animalImage {
      font-size: 1.9rem;
    }
  }

  @media (min-width: 900px) {
    font-size: 1.9rem;
    margin-top: 4px;
    border-radius: 10px;
    .animalImage {
      font-size: 2.4rem;
    }
  }
  @media (min-width: 1400px) {
    font-size: 2.3rem;
    margin-top: 4px;
    border-radius: 12px;
    .animalImage {
      font-size: 2.6rem;
    }
  }
  @media (min-width: 1600px) {
    font-size: 2.5rem;
    margin-top: 5px;
    border-radius: 12px;
    .animalImage {
      font-size: 3.2rem;
    }
  }
  @media (min-width: 1900px) {
    font-size: 2.5rem;
    margin-top: 5px;
    border-radius: 12px;
    .animalImage {
      font-size: 5.5rem;
    }
  }
`;
