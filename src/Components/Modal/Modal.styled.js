import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: fadeIn 0.2s ease-in;
  animation-fill-mode: forwards;
  border-radius: 10px;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .modalContainer {
    width: calc(100% - 30%);
    display: flex;
    justify-content: center;
  }
  @media (max-width: 850px) {
    .modalContainer {
      width: calc(100% - 40px);
    }
  }
  @media (max-width: 465px) {
    .modalContainer {
      width: calc(100% - 15px);
    }
  }
`;
