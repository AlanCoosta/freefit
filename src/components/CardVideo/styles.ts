import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  figure {
    position: relative;
    border: 0;
    cursor: pointer;

    button {
      display: flex;
      align-items: center;

      position: absolute;
      bottom: 24px;
      right: 16px;
      /* z-index: 99; */

      background: #ff7350;
      padding: 12px;
      border-radius: 8px;
      color: #ffffff;
      font-weight: 500;

      svg {
        width: 12px;
        height: 12px;
      }
    }
  }

  & + div {
    margin-left: 24px;

    @media (max-width: 900px) {
      margin-left: 0px;
      margin-top: 32px;
    }
  }

  img {
    width: 100%;
    height: 256px;
    object-fit: cover;
  }

  section {
    margin-top: 8px;
    text-align: left;

    @media (max-width: 900px) {
      text-align: center;
    }

    h3 {
      margin: 16px 0;
    }
  }

  div {
    border-radius: 8px;
    border: 5px solid red;
  }
`;
