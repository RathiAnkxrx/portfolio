import useWindowScroll from "../../Hook/useWindowHeight";
import { FaBars } from "react-icons/fa";
import useWindowWidth from "../../Hook/useWindowWidth";
import {
  HeaderConatiner,
  HeaderName,
  HeaderNav,
  HeaderWrapper,
  NavItem,
  NavLinks,
} from "./HeaderElement";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { height } = useWindowScroll();
  const { width } = useWindowWidth();
  const isMobile = width <= 600;
  const isScrolled = height >= 60;
  const location = window.location.hash.replace("#", "");
  console.log(location);
  return (
    <HeaderConatiner data-scroll={isScrolled} data-open={isOpen}>
      <HeaderWrapper>
        <HeaderName data-aos="zoom-out" data-aos-duration="500">
          Ankur Rathi
        </HeaderName>
        <HeaderNav data-scroll={isScrolled} data-open={isOpen}>
          <NavLinks
            data-aos="fade-down"
            data-aos-duration="600"
            href="#home"
            style={{
              color:
                location === "home" || location === "" ? "#e31b6d" : "#fff",
            }}
          >
            Home
          </NavLinks>

          <NavLinks
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="150"
            href="#about"
            style={{ color: location === "about" ? "#e31b6d" : "#fff" }}
          >
            About
          </NavLinks>

          <NavLinks
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="300"
            href="#portfolio"
            style={{ color: location === "portfolio" ? "#e31b6d" : "#fff" }}
          >
            Portfolio
          </NavLinks>

          <NavLinks
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="450"
            href="#contact"
            style={{ color: location === "contact" ? "#e31b6d" : "#fff" }}
          >
            Contact
          </NavLinks>
        </HeaderNav>
        {isMobile && <FaBars onClick={() => setIsOpen((state) => !state)} />}
      </HeaderWrapper>
    </HeaderConatiner>
  );
};

export default Header;
