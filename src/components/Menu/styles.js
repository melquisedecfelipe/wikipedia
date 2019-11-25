import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 192px;
  height: 370px;

  > header {
    align-items: center;

    > img {
      height: 52px;
    }
  }

  > nav {
    margin-top: 40px;

    > p {
      color: #2e2e2e;
      font-size: 12px;
      line-height: 15px;
      text-decoration: none;
      margin-top: 6px;
    }
  }

  > footer {
    display: flex;
    align-items: flex-end;
    height: 100%;

    > img {
      height: 15px;
      margin-right: 15px;
    }
  }
`;
