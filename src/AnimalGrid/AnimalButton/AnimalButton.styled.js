import styled from "styled-components";

export const StyledAnimalButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 1px solid rgb(150, 232, 211);
  vertical-align: middle;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  color: rgb(106, 163, 137);
  padding: 0.5rem 0.8rem;
  margin-top: 8px;
  border-radius: 12px;
  background-color: rgb(205, 255, 232);
  transform-style: preserve-3d;
  transition: all 0.1s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(150, 232, 211);
    border-radius: inherit;
    transform: translate3d(0, 0.75em, -1em);
    transition: all 0.1s cubic-bezier(0, 0, 1, 1);
  }
  &:hover {
    transform: translate(0, 0.175em);
  }
  &:hover::before {
    transform: translate3d(0, 0.75em, -1em);
  }
  &:active {
    transform: translate(0, 0.75em);
  }
  &:active::before {
    transform: translate3d(0, 0, -1em);
  }
`;
