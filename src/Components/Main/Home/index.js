import {
  HomeContainer,
  HomeWrapper,
  HomeH1,
  HomeSpan,
  HomeH2,
  HomeButton,
  HomeIcon,
} from "./HomeElement";

import { FaArrowRight } from "react-icons/fa";
import { getElementError } from "@testing-library/react";

const Home = () => {
  const handleClick = () => {
    // document.getElementById("about").scrollIntoView();
    window.scrollTo(0, window.innerHeight);
  };
  return (
    <HomeContainer id="home">
      <HomeWrapper>
        <HomeH1 data-aos="fade" data-aos-duration="500" data-aos-delay="700">
          Hello, I'm <HomeSpan>Ankur Rathi</HomeSpan>
        </HomeH1>
        <HomeH2
          data-aos="fade-zoom-in"
          data-aos-duration="500"
          data-aos-delay="1200"
        >
          Frontend web Developer
        </HomeH2>
        <HomeButton
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="500"
          data-aos-delay="1300"
          onClick={handleClick}
        >
          View my work
          <HomeIcon>
            <FaArrowRight />
          </HomeIcon>
        </HomeButton>
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;

// http://findmatthew.com/
