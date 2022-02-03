import styled from "styled-components";

export const StyledLoader = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loadingContainer {
    display: flex;
    justify-content: space-around;
  }

  .loadingCircle {
    display: block;
    width: 50px;
    height: 50px;
    background: #fbab60;
    border-radius: 50%;
  }
`;
