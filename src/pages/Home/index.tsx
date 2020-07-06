/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import {
  FiMapPin,
  FiMenu,
  FiX,
  FiChevronRight,
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';
import { MdDirectionsRun } from 'react-icons/md';
import { GiTakeMyMoney, GiWeightLiftingUp } from 'react-icons/gi';

import { Map, Marker, TileLayer } from 'react-leaflet';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Logo from '../../assets/logo.svg';
import phone from '../../assets/phone.svg';

import WomanFitness from '../../assets/fitness.png';
import Mini from '../../assets/mini.jpeg';
import Midi from '../../assets/midi.jpeg';
import Maxi from '../../assets/maxi.jpeg';
import Gym1 from '../../assets/gym1.jpeg';
import Gym2 from '../../assets/gym2.jpeg';
import Gym3 from '../../assets/gym3.jpeg';
import Gym4 from '../../assets/gym4.jpeg';
import client1 from '../../assets/client1.jpg';
import client2 from '../../assets/client2.jpg';
import client3 from '../../assets/client3.jpg';

import circles from '../../assets/circles.svg';

import ballStripeOrange from '../../assets/ball-stripes-orange.png';

import CardVideo from '../../components/CardVideo';

import * as S from './styles';

const Home: React.FC = () => {
  const [modal, setModal] = useState(false);

  const [initialPosition] = useState<[number, number]>([
    37.4212089,
    -122.0846363,
  ]);

  const imagesGym = [Gym1, Gym2, Gym3, Gym4];

  const clients = [
    {
      id: 1,
      image_url: client1,
      name: 'Alex Felton',
      description:
        'The "Free Fit" approach to the product is different from other franchises with its thoughtfulness and focus on honest cooperation',
      video_url: 'https://www.youtube.com/embed/24fdcMw0Bj0',
    },
    {
      id: 2,
      image_url: client2,
      name: 'Vasiliy Reznik',
      description:
        'Answers to questions are not consultative in nature, but really applied and helping in work',
      video_url: 'https://www.youtube.com/embed/a7sV13ruZWA',
    },
    {
      id: 3,
      image_url: client3,
      name: 'Eugene Pondanerko',
      description:
        'In the learning process, gaps are revealed, which you need to work on. I liked speaker presentation, everything was interesting, in detail,examples from practice were given.',
      video_url: 'https://www.youtube.com/embed/xKFSmazLN4w',
    },
  ];

  return (
    <>
      <S.Modal className={`${modal ? 'menu-opened' : ''}`}>
        <header>
          <FiX size={30} onClick={() => setModal(false)} />
        </header>

        <a href="#about" onClick={() => setModal(false)}>
          About
        </a>

        <a href="#format" onClick={() => setModal(false)}>
          Format
        </a>

        <a href="#gallery" onClick={() => setModal(false)}>
          Gallery
        </a>

        <a href="#reviews" onClick={() => setModal(false)}>
          Reviews
        </a>

        <a href="#contact" onClick={() => setModal(false)}>
          Contact
        </a>
      </S.Modal>

      <S.Container>
        <S.Header>
          <S.Logo>
            <a href="#">
              <img src={Logo} alt="Logo" />

              <h1>FREE FIT</h1>
            </a>
          </S.Logo>

          <S.Menu>
            <a href="#about">About</a>
            <a href="#format">Format</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contacts</a>
          </S.Menu>

          <S.Phone>
            <span>8 495 646-46-45</span>

            <a href="#">Order call</a>

            <img src={phone} alt="" />

            <FiMenu onClick={() => setModal(!modal)} />
          </S.Phone>
        </S.Header>

        <div className="container">
          <S.Franchise>
            <S.FranchiseText>
              <div className="description">
                <h1>FRANCHISE FITNESS CLUB</h1>

                <p>
                  Grow your business under the brand, bringing together the
                  largest chain fitness clubs in Russia
                </p>
              </div>

              <button type="button">
                <a href="#about">LEARN MORE</a>
              </button>

              <div className="socialMedias">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Whatsapp</a>
              </div>
            </S.FranchiseText>

            <S.FranchiseImage>
              <img src={circles} alt="" />

              <img src={WomanFitness} alt="" />
            </S.FranchiseImage>

            <S.FranchiseConfortable>
              <h2>Confortable Solution</h2>

              <p>
                We offer to open economically profitable sports facility where
                everything is provided for in detail
              </p>

              <img src={ballStripeOrange} alt="" />
            </S.FranchiseConfortable>
          </S.Franchise>
        </div>

        <S.About id="about">
          <S.AboutText>
            <h1>ABOUT</h1>

            <p>
              Free Fit is a chain of fitness clubs in a comfortable format,
              combining the leading fitness clubs of the country under its
              brand.
            </p>

            <p>
              The Free Fit team inspires people to do fitness. Win the main
              victory - create the body and spirit of your dreams.
            </p>

            <button type="button">
              <a href="#format">BUY A FRANCHISE</a>
            </button>
          </S.AboutText>

          <S.AboutBackgroundMan />

          <button type="button" className="btnFranchiseMobile">
            <a href="#format">BUY A FRANCHISE</a>
          </button>
        </S.About>

        <S.AboutList>
          <div className="blueBackground">
            <FiMapPin />
            <h3>Convenient location</h3>
            <p>Our clubs are located in easily accessible places</p>
          </div>

          <div className="blueGray">
            <GiWeightLiftingUp />
            <h3>Effective Workouts</h3>
            <p>Activities with the best trainers of your city</p>
          </div>

          <div className="blueOrange">
            <MdDirectionsRun />
            <h3>Modern facilities</h3>
            <p>The gyms are equipped with the latest sporting requirements</p>
          </div>

          <div className="blueGray">
            <GiTakeMyMoney />
            <h3>Low prices</h3>
            <p>Excellent athletic performance for little money</p>
          </div>
        </S.AboutList>

        <S.AboutListMobile>
          <div className="container">
            <div className="icon">
              <FiMapPin />
              <p>Convenient location</p>
            </div>

            <div className="icon">
              <GiWeightLiftingUp />
              <p>Effective Workouts</p>
            </div>
          </div>

          <div className="container">
            <div className="icon">
              <MdDirectionsRun />
              <p>Modern facilities</p>
            </div>

            <div className="icon">
              <GiTakeMyMoney />
              <p>Low prices</p>
            </div>
          </div>
        </S.AboutListMobile>

        <div className="container">
          <S.Board id="format">
            <h1 className="title">Format</h1>

            <p className="description formatWidth">
              We offer to open economically profitable a sports facility where
              everything is provided for in every detail
            </p>

            <S.CardContainer>
              <S.Card>
                <img src={Mini} alt="" />

                <section>
                  <h1>MINI</h1>

                  <strong>Area - from 220 m2 to 399 m2</strong>

                  <div className="details">
                    <p>Personal Manager Assistance</p>
                    <p>Help in recruiting</p>
                    <p>Zoning Preparation</p>
                    <p>Quality control of services</p>
                  </div>

                  <div className="price">
                    <span>499 990 RUB</span>

                    <button type="button">
                      <FiChevronRight />
                    </button>
                  </div>
                </section>
              </S.Card>

              <S.Card>
                <img src={Midi} alt="" />

                <section>
                  <h1>MIDI</h1>

                  <strong>Area - from 400 m2 to 799 m2</strong>

                  <div className="details">
                    <p>All service in the MINI package</p>
                    <p>Help in choosing a place</p>
                    <p>Recommendation for repair and equipment</p>
                    <p>Quality control of services</p>
                  </div>

                  <div className="price">
                    <span>699 990 RUB</span>

                    <button type="button">
                      <FiChevronRight />
                    </button>
                  </div>
                </section>
              </S.Card>

              <S.Card>
                <img src={Maxi} alt="" />

                <section>
                  <h1>MAXI</h1>

                  <strong>Area - from 800 m2</strong>

                  <div className="details">
                    <p>All services in the MIDI package</p>
                    <p>Using Free fit discounts</p>
                    <p>Internship and staff training</p>
                    <p>Consultation at all stages</p>
                  </div>

                  <div className="price">
                    <span>899 990 RUB</span>

                    <button type="button">
                      <FiChevronRight />
                    </button>
                  </div>
                </section>
              </S.Card>
            </S.CardContainer>
          </S.Board>
        </div>

        <div className="container">
          <S.Board id="gallery" className="gallery">
            <h1 className="title">OUR CLUBS</h1>

            <div
              style={{
                paddingBottom: '30px',
                position: 'relative',
              }}
            >
              <Carousel
                additionalTransfrom={0}
                arrows
                // autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 1,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 1,
                  },
                }}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {imagesGym.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt="Gym"
                    style={{
                      display: 'block',
                      height: '600px',
                      margin: 'auto',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ))}
              </Carousel>
            </div>
          </S.Board>
        </div>

        <div className="container">
          <S.Board id="reviews" className="reviewsClientsPadding">
            <h1 className="title">WHAT OUR CLIENTS SAY</h1>

            <p className="description clientsMargin">
              We offer to listen to what our franchisees say
            </p>

            <S.CardVideoContainer>
              {clients.map((item) => (
                <CardVideo key={item.id} clients={item} />
              ))}
            </S.CardVideoContainer>
          </S.Board>
        </div>

        <S.Maps>
          <Map center={initialPosition} zoom={18}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={initialPosition} />
          </Map>

          <form>
            <div>
              <p>
                <b>Have questions?</b> Leave a request and we will call within
                10 minutes
              </p>

              <input type="text" placeholder="Name" name="name" id="name" />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                id="phone"
              />

              <button type="submit">SEND</button>
            </div>
          </form>
        </S.Maps>

        <S.SocialMedia id="contact">
          <div className="container">
            <div>
              <h1>8 495 646-46-45</h1>
            </div>

            <div className="socialMedias">
              <p>info@free-fitness.ru</p>

              <div className="icons">
                <a
                  href="https://github.com/AlanCoosta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                </a>

                <a href="#">
                  <FiTwitter />
                </a>

                <a
                  href="https://www.linkedin.com/in/alancoosta/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin />
                </a>

                <a href="#">
                  <FiFacebook />
                </a>
              </div>
            </div>
          </div>
        </S.SocialMedia>

        <S.MapSite>
          <div className="container">
            <a href="#about">About</a>

            <a href="#format">Format</a>

            <a href="#gallery">Gallery</a>

            <a href="#reviews">Reviews</a>

            <a href="#contact">Contacts</a>
          </div>
        </S.MapSite>

        <S.Footer>
          <div className="container">
            <span className="reserved-min">©‎2020</span>

            <span className="reserved">©‎2020 . All rights reserved</span>

            <span className="privacy">Privacy Policy</span>

            <span className="design">
              <a href="https://www.behance.net/gallery/94841485/Landing-page-for-Fitness-Club-Franchise">
                Design: QABI ASKAROV
              </a>
            </span>
          </div>
        </S.Footer>
      </S.Container>
    </>
  );
};

export default Home;
