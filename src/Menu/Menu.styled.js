import styled from "styled-components";

export const StyledMenu = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background: #191919;
  display: flex;
  justify-content: center;
  align-items: center;

  .gameTitle {
    color: #e69142;
    font-family: "DiloWorld";
    letter-spacing: 1mm;
    font-size: 10rem;
  }
  .menuBtns {
    display: flex;
    justify-content: center;
  }
  .startBtn {
    background: transparent;
    border: 3px solid #fbfbfb;
    color: #fbfbfb;
    font-family: "DiloWorld";
    font-size: 4.5rem;
    padding: 1.3rem;
    border-radius: 100px;
    margin-top: 35px;
    letter-spacing: 0.5mm;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .startBtn:hover {
    background: #fbfbfb;
    color: #191919;
    transform: scale(1.1);
  }
  .startBtn:active {
    background: #fbfbfb;
    color: #191919;
    transform: scale(0.9);
  }
  .footerInfo {
    position: absolute;
    bottom: 0;
    margin-bottom: 25px;
    font-size: 2rem;
  }
  .footerInfo .madeBy {
    color: #fbfbfb;
    font-family: "DiloWorld";
    letter-spacing: 0.2mm;
  }
  .footerInfo a {
    color: #e69142;
  }
  .footerInfo .name {
    font-family: "DiloWorld";
    letter-spacing: 0.2mm;
  }
  @media (max-width: 1024px) {
    .gameTitle {
      font-size: 6rem;
    }
    .startBtn {
      font-size: 3rem;
    }
  }
  @media (max-width: 650px) {
    .gameTitle {
      font-size: 4rem;
    }
    .startBtn {
      font-size: 2.5rem;
    }
    .footerInfo {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 450px) {
    .gameTitle {
      font-size: 3.2rem;
    }
    .startBtn {
      font-size: 2rem;
    }
    .footerInfo {
      font-size: 1.5rem;
    }
  }
`;
