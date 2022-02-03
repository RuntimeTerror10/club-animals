import styled from "styled-components";

export const StyledResult = styled.div`
  width: 100%;
  background: #fbfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .modalContent {
    width: 100%;
    border-radius: 10px;
  }
  .modalHeader {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 0px;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
  }
  .modalHeader img {
    width: 140px;
  }
  .outcome {
    color: #191919;
    font-family: "DiloWorld";
    letter-spacing: 0.2mm;
  }
  .actionContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .menuBtn,
  .resetBtn {
    background: transparent;
    border: 4px solid #191919;
    color: #191919;
    font-family: "DiloWorld";
    letter-spacing: 0.2mm;
    font-size: 2rem;
    padding: 10px 30px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    margin: 0 20px;
    &:hover {
      background: #fbab60;
    }
  }
  @media (min-width: 300px) {
    width: 90%;
    .modalHeader {
      padding: 15px 0px;
    }
    .modalHeader img {
      width: 80px;
    }
    .outcome {
      font-size: 2rem;
    }
    .menuBtn,
    .resetBtn {
      font-size: 1.3rem;
      padding: 7px 25px;
      margin: 0 10px;
    }
  }
  @media (min-width: 500px) {
    width: 85%;
    .modalHeader {
      padding: 15px 0px;
    }
    .modalHeader img {
      width: 100px;
    }
    .outcome {
      font-size: 2.2rem;
    }
    .menuBtn,
    .resetBtn {
      font-size: 1.6rem;
      padding: 8px 30px;
    }
  }
  @media (min-width: 700px) {
    width: 80%;
    .modalHeader {
      padding: 15px 0px;
    }
    .modalHeader img {
      width: 130px;
    }
    .outcome {
      font-size: 2.6rem;
    }
    .menuBtn,
    .resetBtn {
      font-size: 1.8rem;
      padding: 8px 30px;
    }
  }

  @media (min-width: 1200px) {
    width: 75%;
    .modalHeader {
      padding: 25px 0;
    }
    .modalHeader img {
      width: 160px;
    }
    .outcome {
      font-size: 4rem;
    }
    .menuBtn,
    .resetBtn {
      font-size: 2.3rem;
      padding: 10px 30px;
    }
  }

  @media (min-width: 1600px) {
    width: 60%;
    .modalHeader {
      padding: 35px 0;
    }
    .modalHeader img {
      width: 200px;
    }
    .outcome {
      font-size: 5rem;
    }
    .menuBtn,
    .resetBtn {
      font-size: 2.9rem;
      padding: 10px 30px;
    }
  }
`;
