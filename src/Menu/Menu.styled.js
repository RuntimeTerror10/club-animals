import styled from "styled-components";

export const StyledMenu = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background: #191919;
  display: flex;
  justify-content: center;
  align-items: center;

  .game-title {
    color: #e69142;
    font-family: "DiloWorld";
    letter-spacing: 1mm;
    font-size: 10rem;
  }
  .menu-btns {
    display: flex;
    justify-content: center;
  }
  .start-btn {
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
  .start-btn:hover {
    background: #fbfbfb;
    color: #191919;
    transform: scale(1.1);
  }
  .start-btn:active {
    background: #fbfbfb;
    color: #191919;
    transform: scale(0.9);
  }
  .footer-info {
    position: absolute;
    bottom: 0;
    margin-bottom: 25px;
    font-size: 2rem;
  }
  .footer-info .made-by {
    color: #fbfbfb;
    font-family: "DiloWorld";
    letter-spacing: 0.2mm;
  }
  .footer-info a {
    color: #e69142;
  }
  .footer-info .name {
    font-family: "DiloWorld";
    letter-spacing: 0.2mm;
  }
  @media (max-width: 1024px) {
    .game-title {
      font-size: 6rem;
    }
    .start-btn {
      font-size: 3rem;
    }
  }
  @media (max-width: 650px) {
    .game-title {
      font-size: 4rem;
    }
    .start-btn {
      font-size: 2.5rem;
    }
    .footer-info {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 450px) {
    .game-title {
      font-size: 3.2rem;
    }
    .start-btn {
      font-size: 2rem;
    }
    .footer-info {
      font-size: 1.5rem;
    }
  }
`;
