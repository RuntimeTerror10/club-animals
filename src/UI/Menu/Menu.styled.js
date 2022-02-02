import styled from "styled-components";

export const StyledMenu = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background: #191919;
  display: flex;
  justify-content: center;
  align-items: center;

  .gameTitle {
    font-size: 6rem;
    color: #e69142;
    font-family: "DiloWorld";
    letter-spacing: 1mm;
    margin-bottom: 40px;
  }
  .menuBtns {
    display: flex;
    justify-content: center;
  }
  .startBtn {
    background: transparent;
    border: 3px solid #fbfbfb;
    color: #fbfbfb;
    font-size: 3rem;
    font-family: "DiloWorld";
    letter-spacing: 0.5mm;
    padding: 15px 25px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .startBtn:hover {
    background: #fbfbfb;
    color: #191919;
    transform: scale(1.1);
  }
  .startBtn:active {
    transform: scale(0.9);
  }
  .footerInfo {
    position: absolute;
    bottom: 0;
    margin-bottom: 25px;
  }
  .footerInfo .madeBy {
    color: #fbfbfb;
    font-size: 1.8rem;
    font-family: "DiloWorld";
    letter-spacing: 0.2mm;
  }
  .footerInfo a {
    color: #e69142;
  }
  .footerInfo .name {
    font-size: 1.8rem;
    font-family: "DiloWorld";
    letter-spacing: 0.2mm;
  }
`;
