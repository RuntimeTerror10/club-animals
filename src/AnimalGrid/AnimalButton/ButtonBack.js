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
  }

  @media (min-width: 300px) {
    .animal {
      font-size: 2rem;
    }
  }

  @media (min-width: 420px) {
    .animal {
      font-size: 3rem;
    }
  }

  @media (min-width: 660px) {
    .animal {
      font-size: 3.6rem;
    }
  }

  @media (min-width: 1000px) {
    .animal {
      font-size: 4.5rem;
    }
  }
  @media (min-width: 1600px) {
    .animal {
      font-size: 6rem;
    }
  }
  @media (min-width: 1900px) {
    .animal {
      font-size: 7rem;
    }
  }
`;

export const ButtonBack = (props) => {
  return (
    <StyledButtonBack>
      <div className="animal">{props.animalImg}</div>
    </StyledButtonBack>
  );
};
