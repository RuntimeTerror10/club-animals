import styled from "styled-components";
import paw from "../../assets/paw.svg";
const StyledButtonFront = styled.div`
  position: absolute;
  background: #fbab60;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  .paw {
    width: 80%;
    height: 80%;
  }
`;

export const ButtonFront = () => {
  return (
    <StyledButtonFront>
      <img className="paw" src={paw} alt="paw" />
    </StyledButtonFront>
  );
};
