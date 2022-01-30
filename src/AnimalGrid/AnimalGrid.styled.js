import styled from "styled-components";

export const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
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

  @media (min-width: 300px) {
    width: 95%;
  }

  @media (min-width: 460px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1000px) {
    width: 60%;
  }
  @media (min-width: 1600px) {
    width: 50%;
  }
`;
