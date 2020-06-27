import styled from 'styled-components';

export const Container = styled.div``;

// HEADER

export const Header = styled.div`
  height: 128px;
  padding: 0 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: #ffffff;

    img {
      width: 32px;
    }

    h1 {
      font-family: 'Bebas Neue', cursive;
    }
  }

  div {
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

export const MenuHamburguer = styled.div`
  display: none;

  svg {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 4;
  display: flex;

  flex-direction: column;
  align-items: center;
  transform: translateY(50%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  color: #000;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 128px;
    padding: 0 24px;
  }

  a {
    margin: 24px 0;
    cursor: pointer;
    color: #9a9da0;
    font-weight: 500;
  }

  &.menu-opened {
    transform: translateY(0%);
    opacity: 1;
    pointer-events: all;
    transition: all 0.3s;
  }

  svg {
    cursor: pointer;
  }
`;

// CONTAINER
export const Box = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

// FRANCHISE
export const Franchise = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 128px;

  @media (max-width: 900px) {
    display: block;
  }

  div {
    width: 100%;

    @media (max-width: 900px) {
      margin-bottom: 64px;
    }

    img {
      width: 100%;
      max-height: 900px;
      object-fit: contain;
    }
  }
`;

export const FranchiseText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }

  h1 {
    font-family: 'Bebas Neue', cursive;
    font-size: 4em;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 24px;
    letter-spacing: 0.1em;
    line-height: 1.5em;
    max-width: 350px;
  }

  button {
    background: #ff7350;
    padding: 16px 32px;
    border-radius: 26px;
    color: #ffffff;
    font-weight: 500;
    max-width: 264px;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 128px;

    @media (max-width: 900px) {
      display: none;
    }

    a {
      text-decoration: none;
      color: #9a9da0;

      & + a {
        margin-left: 24px;
      }
    }
  }
`;

export const FranchiseConfortable = styled.div`
  text-align: left;
  padding: 24px 0;
  padding-left: 16px;

  h3 {
    font-family: 'Bebas Neue', cursive;
  }

  p {
    max-width: 300px;
    margin-top: 24px;
    letter-spacing: 0.1em;
    line-height: 1.5em;
  }
`;

// ABOUT

export const About = styled.div``;

export const AboutContent = styled.div`
  display: flex;

  @media (max-width: 900px) {
    display: block;
  }

  div {
    width: 50%;
    background: #ffffff;

    @media (max-width: 900px) {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const AboutText = styled.div`
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    padding: 64px 0;

    @media (max-width: 900px) {
      padding: 64px;
    }
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
    text-align: justify;
  }

  button {
    background: #ff7350;
    padding: 16px 32px;
    border-radius: 26px;
    color: #ffffff;
    font-weight: 500;
    margin-top: 24px;
    max-width: 200px;
  }
`;

export const AboutList = styled.div`
  display: flex;

  @media (max-width: 900px) {
    display: block;
    height: 100vh;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    text-align: center;

    background: #9a9da0;
    padding: 16px 64px;
    width: 25%;

    @media (max-width: 900px) {
      width: 100%;
      height: 25%;
    }

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
      margin-top: 16px;
    }

    p {
      max-width: 300px;
      margin-top: 8px;
      letter-spacing: 0.1em;
      line-height: 1.5em;
      font-weight: 500;
    }
  }
`;

export const Board = styled.div`
  display: flex;

  flex-direction: column;
  text-align: center;

  margin: 64px 0;
  padding: 0 28px;

  .title {
    font-family: 'Bebas Neue', cursive;
    font-size: 3em;
    margin-bottom: 24px;
  }

  .description {
    p {
      margin-top: 8px;
      letter-spacing: 0.05em;
      line-height: 1.5em;
    }
  }

  .react-multi-carousel-list {
    height: 100%;

    @media (max-width: 900px) {
      height: 256px;
    }
  }

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

    @media (max-width: 900px) {
      min-width: 32px;
      min-height: 36px;
    }
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

    @media (max-width: 900px) {
      right: 32px;
    }
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

export const CardContainer = styled.ul`
  display: flex;
  margin-top: 24px;
  overflow-x: auto;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;

  background: #fff;
  min-width: 256px;

  & + li {
    margin-left: 24px;
  }

  img {
    width: 100%;
    /* min-height: 300px; */
    object-fit: cover;
  }

  color: #000;

  section {
    display: flex;
    justify-content: space-between;

    flex-direction: column;
    height: 100%;

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

        margin-left: auto;

        svg {
          color: #ffffff;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

// export const Clients = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   text-align: center;

//   /* height: 100vh; */

//   padding: 0 28px;

//   /* margin: 128px 0; */

//   .title {
//     font-family: 'Bebas Neue', cursive;
//     font-size: 3em;
//   }

//   .description {
//     p {
//       margin-top: 8px;
//       letter-spacing: 0.05em;
//       line-height: 1.5em;
//     }
//   }
// `;

// export const CardVideoContainer = styled.div`
//   display: flex;
//   margin-top: 24px;
// `;

// export const CardVideo = styled.div`
//   display: flex;
//   flex-direction: column;

//   width: 100%;
//   height: 100%;
//   overflow: hidden;

//   & + div {
//     margin-left: 24px;
//     overflow: hidden;
//   }

//   img {
//     width: 100%;
//     height: 200px;
//     object-fit: cover;
//   }

//   section {
//     margin-top: 8px;

//     text-align: left;

//     h3 {
//       margin: 16px 0;
//     }
//   }
// `;

// export const Maps = styled.div``;

// export const SocialMedia = styled.div``;

// export const Footer = styled.div``;
