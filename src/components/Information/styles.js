import styled from "styled-components";

export const Container = styled.div`
  padding: 24px 60px 0;
  position: fixed;
  right: 0;

  > img {
    float: right;
  }

  > h2 {
    color: #2e2e2e;
    font-size: 32px;
    line-height: 42px;
    font-weight: bold;
    font-family: "PT Serif";
    margin-top: 80px;
  }

  > small {
    color: #2e2e2e;
    font-size: 12px;
    line-height: 15px;
  }

  > h5 {
    color: #2e2e2e;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-top: 20px;
  }

  > p {
    color: #000;
    font-size: 14px;
    line-height: 17px;
    margin-top: 5px;
  }

  > .origin {
    color: #2e2e2e;
    font-size: 16px;
    line-height: 19px;
  }

  > ul {
    list-style: none;
    display: flex;

    > li {
      font-size: 14px;
      line-height: 17px;
      margin-top: 5px;
      margin-right: 20px;
    }
  }

  > .image {
    margin-top: 70px;
  }

  > section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 20px;

    > div {
      > img {
        width: 63px;
      }

      > p {
        font-size: 10px;
        line-height: 12px;
        width: 63px;
        word-wrap: break-word;
      }
    }
  }
`;
