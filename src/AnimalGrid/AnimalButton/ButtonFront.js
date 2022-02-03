import styled from "styled-components";
import paw from "../../assets/paw.svg";
const StyledButtonFront = styled.div`
  background: #fbab60;
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  .paw {
    margin: 10px;
  }
  @media (min-width: 280px) {
    .paw {
      width: 30px;
      height: 30px;
    }
  }

  @media (min-width: 420px) {
    .paw {
      width: 40px;
      height: 40px;
    }
  }

  @media (min-width: 660px) {
    .paw {
      width: 65px;
    }
  }

  @media (min-width: 1000px) {
    .paw {
      width: 80px;
    }
  }
  @media (min-width: 1600px) {
    .paw {
      width: 100px;
    }
  }
  @media (min-width: 1900px) {
    .paw {
      width: 125px;
    }
  }
`;

export const ButtonFront = () => {
  return (
    <StyledButtonFront>
      <img className="paw" src={paw} alt="paw" />
    </StyledButtonFront>
  );
};
