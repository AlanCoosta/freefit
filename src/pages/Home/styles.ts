import styled, { keyframes } from 'styled-components';
import AboutImage from '../../assets/about.jpeg';

export const Container = styled.div`
  .container {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

// MODAL
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

// HEADER
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1800px;
  height: 35px;
  margin: 60px 60px 0;

  /* MOBILE */
  @media (max-width: 900px) {
    margin: 29px 15px 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: #ffffff;

    img {
      width: 32px;
      height: 32px;
      margin-right: 14px;
    }

    h1 {
      font-family: 'Bebas Neue', cursive;
      font-size: 32px;
      white-space: nowrap;
    }
  }

  /* MOBILE */
  @media (max-width: 900px) {
    a {
      img {
        width: 22px;
        height: 22px;
        margin-right: 10px;
      }

      h1 {
        font-size: 22.68px;
      }
    }
  }
`;

export const Menu = styled.nav`
  display: flex;

  a {
    cursor: pointer;
    color: #ffffff;
    font-weight: 500;

    & + a {
      margin-left: 40px;
    }
  }

  /* MOBILE */
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Phone = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 83px;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    white-space: nowrap;
  }

  a {
    font-size: 16px;
    color: #ffffff;
    text-decoration: underline;
  }

  img {
    display: none;
    width: 35px;
    height: 35px;
  }

  svg {
    display: none;
    color: #ffffff;
  }

  /* MOBILE */
  @media (max-width: 900px) {
    span {
      margin-right: 15px;
      font-size: 14px;
    }

    a {
      display: none;
    }

    img {
      display: flex;
      margin-right: 18px;
    }

    svg {
      display: flex;
      width: 18px;
      height: 16px;

      cursor: pointer;
    }
  }
`;

// FRANCHISE
export const Franchise = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    &:first-child {
      width: 407px;
    }

    width: 545px;

    &:last-child {
      width: 282px;
    }
  }

  /* MOBILE */
  @media (max-width: 900px) {
    display: block;

    div {
      &:first-child {
        width: 100%;
      }

      width: 100%;

      &:last-child {
        width: 100%;
      }
    }
  }
`;

export const FranchiseText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .description {
    display: block;
    margin-top: 213px;
    margin-bottom: 50px;

    h1 {
      font-family: 'Bebas Neue', cursive;
      font-size: 92px;
      margin-bottom: 30px;
    }

    p {
      line-height: 34px;
      font-size: 24px;
    }
  }

  button {
    background: #ff7350;
    border-radius: 35px;

    max-width: 263px;
    height: 70px;

    margin-bottom: 200px;
    font-size: 18px;
    line-height: 30px;

    a {
      color: #ffffff;
    }
  }

  .socialMedias {
    display: flex;
    justify-content: space-between;
    margin-bottom: 90px;

    a {
      text-decoration: none;
      color: #9a9da0;

      & + a {
        margin-left: 24px;
      }
    }
  }

  /* MOBILE */
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;

    .description {
      margin-top: 70px;
      margin-bottom: 30px;
      max-width: 221px;

      h1 {
        font-size: 50px;
        line-height: 55px;
      }

      p {
        font-size: 13px;
        line-height: 18px;
      }
    }

    button {
      width: 170px;
      height: 45px;
      font-size: 12px;
      line-height: 18px;
      padding: 0;

      margin-bottom: 50px;
    }

    .socialMedias {
      display: none;
    }
  }
`;

const spinCircles = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const FranchiseImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  margin-right: 66px;
  margin-left: 10px;

  img {
    &:first-child {
      animation: ${spinCircles} infinite 10s linear;
    }

    &:last-child {
      position: absolute;
      left: 70px;
      right: 0;

      height: 100%;
      margin: 0 auto;
    }
  }

  /* MOBILE */
  @media (max-width: 900px) {
    overflow: hidden;

    margin: 0;
    padding: 0 15px;
  }
`;

export const FranchiseConfortable = styled.div`
  position: relative;

  margin-top: 555px;

  h2 {
    font-size: 30px;
    line-height: 30px;
    font-family: 'Bebas Neue', cursive;

    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.5em;
  }

  img {
    position: absolute;
    top: 50px;
    right: -120px;

    opacity: 0.3;

    width: 167px;
    height: 167px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

// ABOUT

export const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-height: 960px; */
  background: #ffffff;

  div {
    width: 50%;
  }

  .btnFranchiseMobile {
    display: none;
  }

  @media (max-width: 900px) {
    display: block;
    padding: 50px 14px 30px;

    div {
      width: 100%;
    }

    .btnFranchiseMobile {
      display: flex;

      background: #ff7350;

      padding: 15px 32px 12px;

      margin: 30px auto 0;

      border-radius: 35px;

      max-width: 170px;
      height: 45px;

      font-size: 12px;
      line-height: 18px;

      a {
        color: #ffffff;
      }
    }
  }
`;

export const AboutText = styled.div`
  padding-left: 240px;
  padding-right: 24px;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  h1 {
    color: #333333;
    font-family: 'Bebas Neue', cursive;
    font-size: 72px;
  }

  p {
    max-width: 456px;
    margin-top: 30px;
    line-height: 30px;
    color: #333333;
    font-size: 20px;
    text-align: justify;
  }

  button {
    padding: 16px 32px;

    background: #ff7350;
    border-radius: 35px;
    margin-top: 70px;
    max-width: 263px;
    height: 70px;

    a {
      color: #ffffff;
    }
  }

  @media (max-width: 900px) {
    padding: 0;
    margin-bottom: 30px;
    align-items: center;

    h1 {
      font-size: 30px;
      line-height: 1px;
    }

    p {
      max-width: 297px;
      font-size: 13px;
      line-height: 18px;
      text-align: center;
    }

    button {
      display: none;
    }
  }
`;

export const AboutBackgroundMan = styled.div`
  background: url(${AboutImage}) no-repeat center;
  background-size: cover;
  height: 960px;
  width: 100%;

  @media (max-width: 900px) {
    height: 200px;
  }
`;

export const AboutList = styled.div`
  display: flex;
  height: 300px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    text-align: center;

    background: #555e6f;
    width: 25%;

    &.blueBackground {
      background: #292f36;
    }

    &.blueOrange {
      background: #ff7350;
    }

    svg {
      width: 30px;
      height: 30px;
    }

    h3 {
      margin-top: 20px;
    }

    p {
      margin-top: 10px;
      height: 52px;
      font-size: 18px;
      line-height: 26px;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const AboutListMobile = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    background: #555e6f;

    max-height: 242px;

    padding: 35px 0;

    .container {
      display: flex;

      padding: 0 56px;

      &:first-child {
        margin-bottom: 30px;
      }
    }

    .icon {
      width: 50%;

      display: flex;
      flex-direction: column;
      align-items: center;

      text-align: center;

      svg {
        width: 30px;
        height: 30px;

        margin-bottom: 5px;
      }

      p {
        max-width: 56px;

        font-size: 13px;
        line-height: 18px;
      }
    }
  }
`;

// FORMAT AND OUR CLUBS

export const Board = styled.div`
  display: flex;

  flex-direction: column;
  text-align: center;

  margin: 130px 0;

  .title {
    font-family: 'Bebas Neue', cursive;
    font-size: 72px;
    /* line-height: 100px; */

    margin-bottom: 25px;
  }

  .description {
    max-width: 568px;

    margin: 0 auto;
    margin-bottom: 65px;

    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  .clientsMargin {
    margin-bottom: 85px;
  }

  @media (max-width: 900px) {
    margin: 50px 0;

    .title {
      font-size: 30px;
      /* line-height: 1px; */

      margin-bottom: 20px;
    }

    .description {
      margin-bottom: 40px;

      font-size: 13px;
    }

    .formatWidth {
      width: 253px;
    }

    &.gallery {
      padding: 0 14px;
    }

    &.reviewsClientsPadding {
      padding: 0 14px;
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
    border: 0;
    background: rgba(0, 0, 0, 0.5);
    min-width: 64px;
    min-height: 72px;
    opacity: 1;
    cursor: pointer;

    @media (max-width: 900px) {
      /* min-width: 32px; */
      /* min-height: 36px; */
      display: none;
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
`;

export const CardContainer = styled.ul`
  display: flex;
  align-items: left;
  overflow: auto;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;

  background: #fff;

  & + li {
    margin-left: 60px;
  }

  img {
    width: 100%;
  }

  section {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    height: 100%;

    padding: 30px 27px 33px 30px;

    text-align: left;

    h1 {
      color: #ff7350;
      font-size: 36px;
      font-weight: 600;

      margin-bottom: 30px;
    }

    strong {
      color: #333333;
      font-size: 20px;
      font-weight: 600;
    }

    .details {
      margin: 45px 0 60px;

      P {
        font-size: 18px;
        color: #333333;

        & + p {
          margin-top: 20px;
        }
      }
    }

    .price {
      display: flex;
      justify-content: left;
      align-items: baseline;

      span {
        font-weight: 600;
        font-size: 36px;
        color: #333333;
      }

      button {
        display: flex;
        align-items: center;
        border-radius: 10px;
        background: #ff7350;

        margin-left: auto;

        svg {
          color: #ffffff;
          width: 45px;
          height: 45px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    min-width: 250px;

    &:first-child {
      margin-left: 14px;
    }

    & + li {
      margin-left: 30px;
    }

    section {
      padding: 20px 10px 13px 15px;

      h1 {
        font-size: 16px;
        margin-bottom: 16px;
      }

      strong {
        font-size: 13px;
      }

      .details {
        margin: 25px 0;

        P {
          font-size: 12px;

          & + p {
            margin-top: 12px;
          }
        }
      }

      .price {
        align-items: center;

        span {
          font-size: 18px;
        }

        button {
          border-radius: 5px;

          svg {
            width: 35px;
            height: 35px;
          }
        }
      }
    }
  }
`;

// CLIENTS

export const CardVideoContainer = styled.div`
  display: flex;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const Maps = styled.div`
  display: flex;
  background: #ffffff;
  color: #000000;

  @media (max-width: 900px) {
    display: block;
  }

  .leaflet-container {
    width: 50%;

    @media (max-width: 900px) {
      width: 100%;
      height: 256px;
    }
  }

  .leaflet-pane {
    z-index: 1;
  }

  form {
    width: 50%;
    padding: 64px;

    @media (max-width: 900px) {
      padding: 24px;
    }

    div {
      width: 350px;

      p {
        font-size: 1.4em;
        margin-bottom: 24px;
        color: #9a9da0;
      }

      b {
        color: #000000;
      }

      input {
        width: 100%;
        padding: 16px;

        margin-bottom: 16px;
      }

      button {
        background: #ff7350;
        color: #ffffff;
        padding: 16px 32px;
        border-radius: 26px;

        margin-top: 16px;

        font-weight: 500;
        width: 50%;
      }
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;

  background: #ffffff;
  color: #000000;
  min-height: 128px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    padding: 0 24px;

    @media (max-width: 900px) {
      display: block;
    }

    div {
      width: 50%;

      h1 {
        font-size: 3em;

        @media (max-width: 900px) {
          font-size: 1.6em;
        }
      }

      @media (max-width: 900px) {
        width: 100%;
      }
    }

    .socialMedias {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #9a9da0;

      @media (max-width: 900px) {
        display: block;

        p {
          padding: 32px 0;
        }
      }

      p {
        position: relative;
        left: -8px;
        text-decoration: underline;

        @media (max-width: 900px) {
          left: 0;
        }
      }

      .icons {
        display: flex;
        justify-content: space-between;

        a {
          display: flex;
          align-items: center;
          padding: 8px;
          border: 2px solid #9a9da0;
          border-radius: 50%;
          transition: all 0.2s;

          &:hover {
            border-color: #ff7350;

            svg {
              color: #ff7350;
            }
          }

          svg {
            color: #9a9da0;
          }
        }
      }
    }
  }
`;

export const MapSite = styled.div`
  background: #fff;
  color: #000;
  padding: 48px 0;
  border-bottom: 1px solid #9a9da0;

  .container {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    padding: 0 24px;

    a {
      font-weight: 500;
      color: #9a9da0;
    }
  }
`;

export const Footer = styled.div`
  background: #fff;
  color: #000;
  padding: 48px 0;
  border-bottom: 1px solid #31353d;

  .container {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    padding: 0 24px;

    span,
    a {
      color: #9a9da0;
      text-align: right;
    }

    .privacy {
      margin-left: 80px;
    }
  }
`;
