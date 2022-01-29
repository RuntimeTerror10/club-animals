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
  transition: all 0.1s ease-in-out;
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
  .animalImage {
    font-size: 2.3rem;
  }
`;
