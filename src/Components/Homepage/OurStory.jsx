import { styled } from "styled-components";
import mixLogo from "../../assets/mixLogo.png";
// import mixLogo2 from "../../assets/mixLogo2.png";
import mixLogo2 from "../../assets/output-onlinepngtools (1).png";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <hr />
        <div className="ourstory-content">
          <div className="ourstory-text">
            <h3>OUR STORY</h3>
            <p>
              We deliver <b>global solutions</b> in workspace and hospitality
              environments, transforming the way people engage with spaces.
              Choose from the customised products on <b>these</b> pages or
              utilise our extensive expertise to deliver the products you
              envisage in the specifications you need. Whatever your problem,
              you can <b>rely</b> on our solutions to look <b>good</b> for
              longer and invite you to linger in comfort.
            </p>
            <div className="ourstory-learnmore">
              <Link to="/about">Learn More</Link>
            </div>
            <div className="ourstory-img">
              <div className="img-wrap">
                <img src={mixLogo} alt="mix-logo-1" />
              </div>

              <div className="img-wrap">
                <img src={mixLogo2} alt="mix-logo-2" />
              </div>
            </div>
          </div>
          <div className="ourstory-clip">
            <div className="player-wrapper">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=EUhIIbiFrCs"
                // muted="true"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0 0 0;
  margin-top: -5rem;
  .ourstory-content {
    padding: 2rem 0;
    .ourstory-text {
    }
    h3 {
      text-align: center;
      padding-bottom: 1rem;
    }
    p {
      font-weight: 400;
    }
    b {
      color: #2b2a2a;
    }
    .ourstory-learnmore {
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 2px;
      a {
        color: var(--clr-black);
      }
    }
    .ourstory-img {
      width: 100%;
      display: block;
      text-align: center;
      height: auto;
      width: 100%;
      padding-top: 1rem;
    }
    .img-wrap {
      padding: 10px;
      height: auto;
      width: auto;
      display: block;
      img {
        height: 80px;
      }
    }
    .player-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 2rem 0;
    }
  }
  @media screen and (min-width: 768px) {
    .ourstory-content {
      padding: 2rem 5rem;
      .ourstory-img {
        width: 100%;
        padding: 2rem 3rem 0 3rem;
        display: flex;
        height: auto;
        justify-content: space-around;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 1680px) {
    .ourstory-content {
      padding: 2rem 5rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      .ourstory-text {
        padding: 0 6rem 0 0;
      }
      h3 {
        text-align: left;
      }
      .ourstory-img {
        padding-top: 0;
      }
      .player-wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding: 0;
      }
    }
  }
`;

export default OurStory;
