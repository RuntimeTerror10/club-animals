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
    width: 75%;
  }
`;

export const ButtonFront = () => {
  return (
    <StyledButtonFront>
      <img className="paw" src={paw} alt="paw" />
    </StyledButtonFront>
  );
};
