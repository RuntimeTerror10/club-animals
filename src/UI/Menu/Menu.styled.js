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
  @media (max-width: 450px) {
    height: 95vh;
  }
  @media (min-width: 300px) {
    .gameTitle {
      font-size: 3rem;
      margin-bottom: 30px;
      letter-spacing: 0.1mm;
    }
    .startBtn {
      font-size: 2rem;
      padding: 10px 20px;
      border-radius: 50px;
    }
    .footerInfo a,
    .footerInfo .madeBy {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 340px) {
    .gameTitle {
      font-size: 3.3rem;
      margin-bottom: 30px;
      letter-spacing: 0.1mm;
    }
    .startBtn {
      font-size: 2.2rem;
      padding: 10px 20px;
      border-radius: 50px;
    }
    .footerInfo a,
    .footerInfo .madeBy {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 450px) {
    .gameTitle {
      font-size: 3.7rem;
      margin-bottom: 40px;
    }
    .startBtn {
      font-size: 2.5rem;
      padding: 10px 20px;
      border-radius: 50px;
    }
    .footerInfo a,
    .footerInfo .madeBy {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 600px) {
    .gameTitle {
      font-size: 4.5rem;
      margin-bottom: 50px;
    }
    .startBtn {
      font-size: 3rem;
      padding: 15px 25px;
      border-radius: 50px;
    }
    .footerInfo a,
    .footerInfo .madeBy {
      font-size: 1.8rem;
    }
  }
  @media (min-width: 1100px) {
    .gameTitle {
      font-size: 8rem;
      margin-bottom: 80px;
    }
    .startBtn {
      font-size: 5rem;
      padding: 20px 30px;
      border-radius: 80px;
    }
    .footerInfo a,
    .footerInfo .madeBy {
      font-size: 2.3rem;
    }
  }

  @media (min-width: 1900px) {
    .gameTitle {
      font-size: 10rem;
      margin-bottom: 100px;
    }
    .startBtn {
      font-size: 6rem;
      padding: 25px 35px;
      border-radius: 80px;
    }
    .footerInfo a,
    .footerInfo .madeBy {
      font-size: 2.6rem;
    }
  }
`;
