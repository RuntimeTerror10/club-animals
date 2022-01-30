import styled from "styled-components";

export const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  justify-content: center;

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

export const grid = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  justifyContent: "center",
};
