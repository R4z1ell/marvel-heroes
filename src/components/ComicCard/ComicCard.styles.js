import styled from 'styled-components';

export const CoverImage = styled.img`
  width: 289px;
  height: 404px;
  border: 4px solid #22262a;
  box-shadow: 0 26px 24px -14px rgba(0, 0, 0, 0.5);
`;

export const ComicCardContainer = styled.div`
  position: relative;
  height: 404px;
  overflow: hidden;
  margin-bottom: 44px;
  z-index: 30;

  .sfondo-bianco {
    position: absolute;
    bottom: -100%;
    width: 100%;
    height: 404px;
    background-color: #fff;
    padding: 25px;
    transition: all 0.7s;

    h2 {
      margin-bottom: 20px;
    }

    p {
      font-family: 'Roboto';
      font-size: 16px;
    }
  }

  &:hover {
    .sfondo-bianco {
      bottom: 0%;
      transition: all 0.7s;
    }
  }
`;
