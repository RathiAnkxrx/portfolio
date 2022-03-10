import {
  AccountLink,
  FooterContainer,
  FooterCredit,
  FooterSpan,
  FooterWrapper,
  ScrollToTop,
  SocialMediaLinks,
} from "./FooterElement";
import { FaGithub } from "react-icons/fa";
import { SiNetlify, SiLinkedin, SiInstagram } from "react-icons/si";
import { IoMdRocket } from "react-icons/io";
const style = {
  color: "#fff",
};
const Footer = () => {
  const clickHandle = () => {
    window.scrollTo(0, 0);
  };
  return (
    <FooterContainer>
      <FooterWrapper>
        <ScrollToTop onClick={clickHandle}>
          <IoMdRocket />
        </ScrollToTop>
        <SocialMediaLinks>
          <AccountLink href="https://github.com/RathiAnkxrx">
            <FaGithub style={style} />
          </AccountLink>
          <AccountLink href="https://app.netlify.com/teams/rathiankxrx/overview">
            <SiNetlify style={style} />
          </AccountLink>
          <AccountLink>
            <SiLinkedin style={style} />
          </AccountLink>
          <AccountLink href="https://www.instagram.com/ankurrathi15/?hl=en">
            <SiInstagram style={style} />
          </AccountLink>
        </SocialMediaLinks>
        <FooterCredit>
          Ankur Rathi <FooterSpan> &#xA9; 2022</FooterSpan>
        </FooterCredit>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
