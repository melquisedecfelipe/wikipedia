import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  width: 192px;

  > nav {
    > h2 {
      color: #2e2e2e;
      font-size: 18px;
      line-height: 22px;
      font-weight: bold;
    }

    > p {
      color: #838383;
      font-size: 12px;
      line-height: 15px;
      margin-top: 6px;
    }
  }
`;
