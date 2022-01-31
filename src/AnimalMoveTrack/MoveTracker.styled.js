import styled from "styled-components";

export const StyledMoveTracker = styled.div`
  display: flex;
  .movesContainer {
    display: flex;
    justify-content: flex-start;
    background: #191919;
    border-radius: 10px;
    border: 6px solid #303030;
    box-shadow: -3px 12px 69px 0px #000 inset;
    -webkit-box-shadow: -3px 12px 69px 0px #000 inset;
    -moz-box-shadow: -3px 12px 69px 0px #000 inset;
  }
  .animalMove {
    user-select: none;
    padding: 1px 6px;
    border: 1px solid #191919;
    border-radius: 12px;
    vertical-align: middle;
    background: #fbfbfb;
    transform-style: preserve-3d;
    transition: all 0.15s ease-in-out;
  }
  @media (min-width: 300px) {
    .animalMove {
      font-size: 1.3rem;
    }
    .movesContainer {
      width: 6.4rem;
      height: 38px;
      padding: 4px;
    }
  }
  @media (min-width: 420px) {
    .animalMove {
      font-size: 1.6rem;
    }
    .movesContainer {
      width: 7.4rem;
      height: 40px;
      padding: 4px;
    }
  }
  @media (min-width: 660px) {
    .animalMove {
      font-size: 1.9rem;
    }
    .movesContainer {
      width: 8.5rem;
      height: 50px;
      padding: 6px;
    }
  }
  @media (min-width: 1000px) {
    .animalMove {
      font-size: 2.4rem;
    }
    .movesContainer {
      width: 9.8rem;
      height: 60px;
      padding: 6px;
    }
  }
  @media (min-width: 1400px) {
    .animalMove {
      font-size: 2.6rem;
    }
    .movesContainer {
      width: 10.4rem;
      height: 60px;
      padding: 6px;
    }
  }
  @media (min-width: 1600px) {
    .animalMove {
      font-size: 3.2rem;
    }
    .movesContainer {
      width: 12.3rem;
      height: 65px;
      padding: 6px;
    }
  }
  @media (min-width: 1900px) {
    .animalMove {
      font-size: 5rem;
    }
    .movesContainer {
      height: 95px;
      width: 17.7rem;
      padding: 6px;
    }
  }
`;
