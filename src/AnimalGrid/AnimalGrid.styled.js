import styled from "styled-components";

export const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(9 * var(--width));
  justify-content: center;
  animation: zoomIn 0.55s ease-in-out;

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
