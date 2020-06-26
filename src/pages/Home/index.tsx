/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FiMapPin, FiChevronRight, FiMenu, FiX } from 'react-icons/fi';
import { MdDirectionsRun } from 'react-icons/md';
import { GiTakeMyMoney, GiWeightLiftingUp } from 'react-icons/gi';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Logo from '../../assets/logo.svg';
import WomanFitness from '../../assets/fitness.png';
import AboutImage from '../../assets/about.jpeg';
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

import * as S from './styles';

const Home: React.FC = () => {
  const [modal, setModal] = useState(false);

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

        <a>Contact</a>
      </S.Modal>

      <S.Container>
        <S.Header>
          <S.HeaderLeft>
            <div>
              <img src={Logo} alt="Logo" />
              <h1>FREE FIT</h1>
            </div>

            <div className="menu">
              <a href="#about">About</a>
              <a href="#format">Format</a>
              <a href="#gallery">Gallery</a>
              <a href="#reviews">Reviews</a>
              <a>Contact</a>
            </div>
          </S.HeaderLeft>

          <S.Contacts>
            <span>(23)99563-0799</span>
            <a href="#">Order call</a>
          </S.Contacts>

          <S.MenuHamburguer>
            <FiMenu size={30} onClick={() => setModal(!modal)} />
          </S.MenuHamburguer>
        </S.Header>

        <S.Box>
          <S.Franchise id="about">
            <S.FranchiseText>
              <h1>FRANCHISE FITNESS CLUB</h1>

              <p>
                Grow your business under the brand, bringing together the
                largest chain fitness clubs in Russia
              </p>

              <button type="button">LEARN MORE</button>

              <div>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Whatsapp</a>
              </div>
            </S.FranchiseText>

            <div>
              <img src={WomanFitness} alt="" />
            </div>

            <S.FranchiseConfortable>
              <h3>Confortable Solution</h3>

              <p>
                We offer top open economically profitable sports facility where
                everything is provided for in detail
              </p>
            </S.FranchiseConfortable>
          </S.Franchise>
        </S.Box>
        {/*
      <S.About>
        <S.AboutContent>
          <S.AboutText>
            <div>
              <h1>ABOUT</h1>

              <p>
                Free Fit is a chain of fitness clubs in a comfortable format,
                combining tha leading fitness clubs of the country under its
                brand.
              </p>

              <p>
                The Free Fit team inspires people to do fitness. Win the main
                victory - create the body and spirit of your dreams.
              </p>

              <button type="button">BUY A FRANCHISE</button>
            </div>
          </S.AboutText>

          <img src={AboutImage} alt="" />
        </S.AboutContent>

        <S.AboutList>
          <div>
            <FiMapPin />
            <h3>Convenient location</h3>
            <p>Our clubs are located in easily accessible places</p>
          </div>

          <div>
            <GiWeightLiftingUp />
            <h3>Effective Workouts</h3>
            <p>Activities with the best trainers of your city</p>
          </div>

          <div>
            <MdDirectionsRun />
            <h3>Modern facilities</h3>
            <p>The gyms are equipped with the latest sporting requirements</p>
          </div>

          <div>
            <GiTakeMyMoney />
            <h3>Low price</h3>
            <p>Excellent athletic performance fot little money</p>
          </div>
        </S.AboutList>
      </S.About>

      <S.Box>
        <S.Format id="format">
          <h1 className="title">Format</h1>

          <div className="description">
            <p>We offer to open economically profitable</p>

            <p>
              a sports facility where everything is provided for in every detail
            </p>
          </div>

          <S.CardContainer>
            <S.Card>
              <img src={Mini} alt="" />

              <section>
                <h1>MINI</h1>

                <p className="area">Area - from 220 m2 to 399 m2</p>

                <div className="details">
                  <p>Personal Manager Assistance</p>
                  <p>Help in recruiting</p>
                  <p> Zoning Preparation</p>
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

                <p className="area">Area - from 400 m2 to 799 m2</p>

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

                <p className="area">Area - from 220 m2 to 399 m2</p>

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
          </S.CardContainer>
        </S.Format>
      </S.Box>

      <S.Box>
        <S.OurClubs id="gallery">
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
              <img
                src={Gym1}
                alt="Gym"
                style={{
                  display: 'block',
                  height: '600px',
                  margin: 'auto',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />

              <img
                src={Gym2}
                alt="Gym"
                style={{
                  display: 'block',
                  height: '600px',
                  margin: 'auto',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />

              <img
                src={Gym3}
                alt="Gym"
                style={{
                  display: 'block',
                  height: '600px',
                  margin: 'auto',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />

              <img
                src={Gym4}
                alt="Gym"
                style={{
                  display: 'block',
                  height: '600px',
                  margin: 'auto',
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </Carousel>
          </div>
        </S.OurClubs>
      </S.Box>

      <S.Box>
        <S.Clients id="reviews">
          <h1 className="title">What Our Clients Say</h1>

          <div className="description">
            <p>We offer to listen to what our franchisees say</p>
          </div>

          <S.CardVideoContainer>
            <S.CardVideo>
              <img src={client1} alt="" />

              <section>
                <h3>Dwayne Johnson</h3>

                <p>
                  The "FreeFit" approach to the product is different from other
                  frnachises with its thoughtfulness and focus on honest
                  cooperation
                </p>
              </section>
            </S.CardVideo>

            <S.CardVideo>
              <img src={client2} alt="" />

              <section>
                <h3>Jason Statham</h3>

                <p>
                  Answer to questions are not consultative in nature, but really
                  applied and helping in work
                </p>
              </section>
            </S.CardVideo>

            <S.CardVideo>
              <img src={client3} alt="" />

              <section>
                <h3>Jason Momoa</h3>

                <p>
                  In the learning process, gaps are revealed, which you need to
                  work on. I liked speaker presentation, everything was
                  interesting, in detail, examples from practice were given.
                </p>
              </section>
            </S.CardVideo>
          </S.CardVideoContainer>
        </S.Clients>
      </S.Box>

      <S.Maps>
        <div>Mapa</div>
        <div>Formulario</div>
      </S.Maps>

      <S.SocialMedia>
        <div>21 995630799</div>
        <div>
          <p>alan@rocketseat.com.br</p>
          <span>github</span>
          <span>twitter</span>
          <span>google</span>
          <span>facebook</span>
        </div>
      </S.SocialMedia>

      <S.Footer>
        <div>
          <span>About</span>
          <span>Format</span>
          <span>Gallery</span>
          <span>Reviews</span>
          <span>Contatcs</span>
        </div>

        <div>
          <span>2020</span>
          <span>Privacy Policy</span>
          <span>Design: GABI ABKAROV</span>
        </div>
      </S.Footer> */}
      </S.Container>
    </>
  );
};

export default Home;
