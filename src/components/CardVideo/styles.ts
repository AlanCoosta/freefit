import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  width: 100%;
  height: 100%;

  &:first-child {
    margin-right: 90px;
  }

  &:nth-child(2) {
    margin-right: 85px;
  }

  figure {
    position: relative;
    border: 0;
    cursor: pointer;

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      bottom: 24px;
      right: 16px;

      background: #ff7350;
      /* padding: 12px; */
      width: 45px;
      height: 45px;
      border-radius: 10px;
      color: #ffffff;
    }
  }

  img {
    width: 100%;

    max-height: 260px;
    object-fit: cover;
  }

  h3 {
    margin: 20px 0;
    font-size: 24px;
  }

  p {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    text-align: center;

    & + div {
      margin-right: 0px;
      margin-top: 32px;
    }

    figure {
      button {
        width: 37px;
        height: 37px;
      }
    }

    h3 {
      margin: 15px 0;
      font-size: 16px;
    }

    p {
      padding: 0 15px;
      font-size: 13px;
      line-height: 18px;
    }
  }
`;
