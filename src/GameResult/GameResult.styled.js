import styled from "styled-components";

export const StyledResult = styled.div`
  background: #fbfbfb;
  border-radius: 10px;
  display: flex;
  width: 100%;
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
    padding: 25px;
    overflow: hidden;
    border-radius: 10px 10px 0 0;
  }
  .modal-header img {
    width: 180px;
  }
  .outcome {
    color: #191919;
    font-family: "DiloWorld";
    font-size: 2.8rem;
    font-weight: 200;
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
    font-size: 2.3rem;
    font-weight: 200;
    padding: 10px 30px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin: 0 20px;
    &:hover {
      background: #fbab60;
    }
  }

  @media (max-width: 768px) {
    .outcome {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 465px) {
    .outcome {
      font-size: 2rem;
    }
    .menu-btn,
    .reset-btn {
      font-size: 1.8rem;
    }
  }
`;
