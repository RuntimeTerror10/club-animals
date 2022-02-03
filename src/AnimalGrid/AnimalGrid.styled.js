import styled from "styled-components";

export const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  margin: 0 10px;
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
`;
