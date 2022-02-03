import styled from "styled-components";

export const StyledResult = styled.div`
  background: #fbfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .modal-content {
    width: 100%;
    border-radius: 10px;
  }
  .modal-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 0px;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
  }
  .modal-header img {
    width: 140px;
  }
  .outcome {
    color: #191919;
    font-family: "DiloWorld";
    letter-spacing: 0.2mm;
  }
  .action-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .menu-btn,
  .reset-btn {
    background: transparent;
    border: 4px solid #191919;
    color: #191919;
    font-family: "DiloWorld";
    letter-spacing: 0.3mm;
    font-size: 2.3rem;
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
    .modal-header {
      padding: 15px 0px;
    }
    .modal-header img {
      width: 80px;
    }
    .outcome {
      font-size: 2rem;
    }
    .menu-btn,
    .reset-btn {
      font-size: 1.3rem;
      padding: 7px 25px;
      margin: 0 10px;
    }
  }
  @media (min-width: 500px) {
    width: 85%;
    .modal-header {
      padding: 15px 0px;
    }
    .modal-header img {
      width: 100px;
    }
    .outcome {
      font-size: 2.2rem;
    }
    .menu-btn,
    .reset-btn {
      font-size: 1.6rem;
      padding: 8px 30px;
    }
  }
  @media (min-width: 700px) {
    .modal-header {
      padding: 15px 0px;
    }
    .modal-header img {
      width: 130px;
    }
    .outcome {
      font-size: 2.6rem;
    }
    .menu-btn,
    .reset-btn {
      font-size: 1.8rem;
      padding: 8px 30px;
    }
  }

  @media (min-width: 1200px) {
    .modal-header {
      padding: 25px 0;
    }
    .modal-header img {
      width: 160px;
    }
    .outcome {
      font-size: 4rem;
    }
    .menu-btn,
    .reset-btn {
      font-size: 2.3rem;
      padding: 10px 30px;
    }
  }

  @media (min-width: 1600px) {
    .modal-header {
      padding: 35px 0;
    }
    .modal-header img {
      width: 200px;
    }
    .outcome {
      font-size: 5rem;
    }
    .menu-btn,
    .reset-btn {
      font-size: 2.9rem;
      padding: 10px 30px;
    }
  }
`;
