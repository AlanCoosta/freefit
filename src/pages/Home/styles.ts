import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  height: 128px;
  padding: 0 28px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
  }
`;

export const LogoText = styled.h1`
  font-family: 'Bebas Neue', cursive;
`;

export const Menu = styled.div`
  display: flex;

  @media (max-width: 900px) {
    display: none;
  }

  a {
    margin-left: 24px;
    cursor: pointer;
    color: #9a9da0;
    font-weight: 500;
  }
`;

export const Contacts = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }

  span {
    margin-right: 8px;
    font-size: 1.4em;
    font-weight: bold;
    margin-right: 48px;
  }

  a {
    font-size: 0.8em;
    color: #9a9da0;
  }
`;

export const Box = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Franchise = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;

  padding: 0 28px;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const FranchiseText = styled.div`
  text-align: left;
  width: 350px;
  margin-top: 128px;

  h1 {
    font-family: 'Bebas Neue', cursive;
    font-size: 4em;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 24px;
    letter-spacing: 0.1em;
    line-height: 1.5em;
  }

  button {
    background: #ff7350;
    padding: 16px 32px;
    border-radius: 26px;
    color: #ffffff;
    font-weight: 500;
  }

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 128px;

    a {
      text-decoration: none;
      color: #9a9da0;

      & + a {
        margin-left: 24px;
      }
    }
  }
`;

export const FranchiseImage = styled.div`
  img {
    width: 100%;
    /* max-height: 800px; */
  }
`;

export const FranchiseConfortable = styled.div`
  text-align: left;
  margin-top: 384px;
  max-width: 300px;

  h3 {
    font-family: 'Bebas Neue', cursive;
  }

  p {
    margin-top: 24px;
    letter-spacing: 0.1em;
    line-height: 1.5em;
  }
`;

export const About = styled.div`
  /* height: 100vh; */
`;

export const AboutContent = styled.div`
  display: flex;

  div {
    width: 50%;
  }

  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 900px) {
    display: block;
    height: auto;

    div {
      width: 100%;
      height: 50vh;
    }

    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }
`;

export const AboutText = styled.div`
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  div {
    margin: 0 auto;
  }

  h1 {
    color: #31353d;
    font-family: 'Bebas Neue', cursive;
    font-size: 3em;
  }

  p {
    max-width: 500px;
    margin-top: 24px;
    letter-spacing: 0.1em;
    line-height: 1.5em;
    color: #31353d;
    font-weight: 500;
  }

  button {
    background: #ff7350;
    padding: 16px 32px;
    border-radius: 26px;
    color: #ffffff;
    font-weight: 500;
    margin-top: 24px;

    width: 200px;
  }
`;

export const AboutList = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  /* border: 5px solid red; */
  width: 100%;
  height: 300px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: #9a9da0;
    padding: 24px 64px;

    width: 25%;
    height: 100%;

    &:nth-child(1) {
      background: #292f36;
    }

    &:nth-child(3) {
      background: #ff7350;
    }

    svg {
      width: 30px;
      height: 30px;
    }

    h3 {
      margin-top: 8px;
    }

    p {
      max-width: 500px;
      margin-top: 8px;
      letter-spacing: 0.1em;
      line-height: 1.5em;
      font-weight: 500;
    }
  }
`;

export const Format = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* height: 100vh; */

  padding: 0 28px;

  .title {
    font-family: 'Bebas Neue', cursive;
    font-size: 3em;
  }

  .description {
    p {
      margin-top: 8px;
      letter-spacing: 0.05em;
      line-height: 1.5em;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  /* justify-content: space-between; */
  width: 100%;
  height: 100%;
  overflow: hidden;

  background: #fff;

  & + div {
    margin-left: 24px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  color: #000;

  section {
    overflow: hidden;

    padding: 24px;

    text-align: left;

    h1 {
      color: #ff7350;
      margin-bottom: 24px;
    }

    .area {
      font-weight: 500;
    }

    .details {
      margin: 24px 0;

      P {
        color: #9a9da0;

        & + p {
          margin-top: 8px;
        }
      }
    }

    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-weight: bold;
        font-size: 1.6em;
        color: #474747;
      }

      button {
        display: flex;
        align-items: center;
        border-radius: 8px;
        background: #ff7350;

        svg {
          color: #ffffff;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

export const OurClubs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  /* height: 100vh; */

  padding: 0 28px;

  /* margin: 128px 0; */

  .react-multiple-carousel__arrow {
    position: absolute;
    outline: 0;
    transition: all 0.5s;
    border-radius: 0;
    z-index: 1000;
    border: 0;
    background: rgba(0, 0, 0, 0.5);
    min-width: 64px;
    min-height: 72px;
    opacity: 1;
    cursor: pointer;
  }

  .react-multiple-carousel__arrow--right {
    bottom: 0;
    right: 0;
    background: #c44428;
    opacity: 0.8;
  }

  .react-multiple-carousel__arrow--right:hover {
    opacity: 1;
  }

  .react-multiple-carousel__arrow--left {
    bottom: 0;
    left: auto;
    right: 64px;
    background: #e37250;
    opacity: 0.8;
  }

  .react-multiple-carousel__arrow--left:hover {
    opacity: 1;
  }

  .react-multi-carousel-dot button {
    border-width: 3px;
    border-color: #e37250;
    background: #e37250;
  }

  .react-multi-carousel-dot--active button {
    background: #ffffff;
  }

  .title {
    font-family: 'Bebas Neue', cursive;
    font-size: 3em;
  }

  .description {
    p {
      margin-top: 8px;
      letter-spacing: 0.05em;
      line-height: 1.5em;
    }
  }
`;

export const Clients = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  /* height: 100vh; */

  padding: 0 28px;

  /* margin: 128px 0; */

  .title {
    font-family: 'Bebas Neue', cursive;
    font-size: 3em;
  }

  .description {
    p {
      margin-top: 8px;
      letter-spacing: 0.05em;
      line-height: 1.5em;
    }
  }
`;

export const CardVideoContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const CardVideo = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  overflow: hidden;

  & + div {
    margin-left: 24px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  section {
    margin-top: 8px;

    text-align: left;

    h3 {
      margin: 16px 0;
    }
  }
`;

export const Maps = styled.div``;

export const SocialMedia = styled.div``;

export const Footer = styled.div``;
