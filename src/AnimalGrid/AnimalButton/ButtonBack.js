import styled from "styled-components";

const StyledButtonBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: #fbfbfb;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  .animal {
    user-select: none;
    -webkit-user-select: none;
    font-size: calc(var(--width) * 0.7);
  }
`;

export const ButtonBack = (props) => {
  return (
    <StyledButtonBack>
      <div className="animal">{props.animalImg}</div>
    </StyledButtonBack>
  );
};
