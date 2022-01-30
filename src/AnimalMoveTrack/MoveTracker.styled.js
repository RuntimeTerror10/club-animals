import styled from "styled-components";

export const StyledMoveTracker = styled.div`
  .movesContainer {
    display: flex;
    padding: 8px;
    justify-content: flex-start;
    background: #303030;
    border-radius: 10px;
    box-shadow: -3px 12px 69px 0px #141414 inset;
    -webkit-box-shadow: -3px 12px 69px 0px #141414 inset;
    -moz-box-shadow: -3px 12px 69px 0px #141414 inset;
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
      height: 40px;
    }
  }
  @media (min-width: 420px) {
    .animalMove {
      font-size: 1.6rem;
    }
    .movesContainer {
      width: 7.4rem;
      height: 45px;
    }
  }
  @media (min-width: 660px) {
    .animalMove {
      font-size: 1.9rem;
    }
    .movesContainer {
      width: 8.5rem;
      height: 50px;
    }
  }
  @media (min-width: 900px) {
    .animalMove {
      font-size: 2.4rem;
    }
    .movesContainer {
      width: 9.8rem;
      height: 60px;
    }
  }
  @media (min-width: 1400px) {
    .animalMove {
      font-size: 2.6rem;
    }
    .movesContainer {
      width: 10.4rem;
      height: 60px;
    }
  }
  @media (min-width: 1600px) {
    .animalMove {
      font-size: 3.2rem;
    }
    .movesContainer {
      width: 12.8rem;
      height: 65px;
    }
  }
  @media (min-width: 1900px) {
    .animalMove {
      font-size: 5rem;
    }
    .movesContainer {
      height: 95px;
      width: 17.7rem;
    }
  }
`;
