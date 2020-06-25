<S.AboutContent>
  <S.AboutText>
    <h1>ABOUT</h1>

    <p>
      Free Fit is a chain of fitness clubs in a comfortable format, combining
      tha leading fitness clubs of the country under its brand.
    </p>

    <p>
      The Free Fit team inspires people to do fitness. Win the main victory -
      create the body and spirit of your dreams.
    </p>

    <button type="button">BUY A FRANCHISE</button>
  </S.AboutText>
</S.AboutContent>;

{
  /* <S.AboutList>
          <div>
            <img src="" alt="" />
            <h3>Convenient location</h3>
            <p>Our clubs are located in easily accessible places</p>
          </div>

          <div>
            <img src="" alt="" />
            <h3>Effective Workouts</h3>
            <p>Activities with the best trainers of your city</p>
          </div>

          <div>
            <img src="" alt="" />
            <h3>Modern facilities</h3>
            <p>The gyms are equipped with the latest sporting requirements</p>
          </div>

          <div>
            <img src="" alt="" />
            <h3>Low price</h3>
            <p>Excellent athletic performance fot little money</p>
          </div>
        </S.AboutList> */
}

export const AboutContent = styled.div`
  display: flex;
  background: #fff;

  img {
    width: 50%;
    object-fit: cover;
  }
`;

export const AboutText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  padding: 64px;

  h1 {
    color: #31353d;
    font-family: 'Bebas Neue', cursive;
    font-size: 3em;
  }

  p {
    width: 500px;
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
  align-items: center;

  div {
    text-align: center;
    background: #9a9da0;

    width: 25%;
    height: 200px;

    &:nth-child(1) {
      background: #31353d;
    }

    &:nth-child(3) {
      background: #ff7350;
    }
  }
`;
