import { styled } from "styled-components";
// import heroImg from "../../assets/hero-image/room_furniture_interior_96680_1920x1080.jpg";
// import heroImg from "../../assets/hero-image/armchair_scraps_interior_217477_1920x1080.jpg";
import heroImg from "../../assets/hero-image/room_interior_chair_172158_1920x1080.jpg";
import titleImg from "../../assets/hero-image/Transparent Img/CB_20230713_HP_DDLogo1-white2.png";
const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title">
            <h1>Design your sweet home</h1>
            <img src={titleImg} alt="" />
            <p className="hero-text">
              "Just in, beautifully craft room"
              <br />
              "islands, bath vanities and finishing"
              <br />
              "touches to transform your home. "
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* height: 100vh; */
  .hero-container {
    height: 100vh;
    background-image: url(${heroImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: -5rem;
    z-index: 0;

    .hero-content {
      position: absolute;
      left: 1rem;
      bottom: 1rem;
      color: var(--clr-white);
      h1 {
        font-size: 3rem;
        font-weight: 600;
      }

      .hero-title {
        img {
          width: 12rem;
        }
      }
      .hero-text {
        color: var(--clr-white);
        font-size: 0.75rem;
        font-weight: 200;
        margin-left: 0.25rem;
      }
    }

    @media screen and (min-width: 992px) {
      .hero-content {
        position: absolute;
        left: 6rem;
        bottom: 4rem;
        color: var(--clr-white);
        h1 {
          font-size: 4rem;
          font-weight: 600;
        }
        .hero-title {
          img {
            width: 16rem;
          }
        }
      }
    }
  }
`;

export default Hero;
