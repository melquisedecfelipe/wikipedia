import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;

  > div {
    height: 100vh;
    width: 600px;
    background: no-repeat;
    background-size: cover;
    background-position: top center;
  }

  > h2 {
    color: #2e2e2e;
    font-size: 18px;
    margin-top: 30px;
    line-height: 22px;
  }

  > p {
    color: #2e2e2e;
    font-size: 14px;
    line-height: 24px;
    margin-top: 25px;
  }

  > section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 600px;
    margin-top: 30px;
    margin-bottom: 60px;

    > div {
      width: 100%;

      & img {
        height: 135px;
        width: 135px;
      }

      & p {
        color: #2e2e2e;
        font-size: 10px;
        line-height: 12px;
      }
    }
  }
`;
