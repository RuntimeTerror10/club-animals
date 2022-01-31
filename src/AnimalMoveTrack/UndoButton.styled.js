import styled from "styled-components";

export const StyledUndoButton = styled.button`
  position: relative;
  color: #191919;
  background: #fbab60;
  border-radius: 10px;
  display: inline-block;
  padding: 0 20px;
  border: none;
  margin-left: 15px;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  &:hover {
    background: #e08d3c;
  }
  &:active {
    transform: scale(0.9);
  }
  .undo {
    width: 40px;
  }
  .badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #fbfbfb;
    border-radius: 50%;
    padding: 8px 14px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #191919;
  }
`;
