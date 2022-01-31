import styled from "styled-components";

export const StyledResult = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  .modalContent {
    width: 100%;
    border-radius: 10px;
  }
  .modalContainer {
    width: 80%;
    background: #fbfbfb;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }
  .actionContainer {
    margin: 20px 0;
  }
  .menuBtn,
  .resetBtn {
    background: transparent;
    border: 4px solid #191919;
    color: #191919;
    font-size: 2rem;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    margin: 0 20px;
    &:hover {
      background: #fbab60;
    }
  }
`;
