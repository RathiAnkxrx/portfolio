import {
  TechnicalSkill,
  LogoConatiner,
  LogoImg,
  SvgContainer,
} from "./AboutElement";
import SVG from "../../../asset/Svg";
import html from "../../../asset/skills/html.png";
import js from "../../../asset/skills/js.png";
import sass from "../../../asset/skills/sass.png";
import css from "../../../asset/skills/css.png";
import react from "../../../asset/skills/react.png";
const TechnicalSkills = () => {
  return (
    <TechnicalSkill>
      <LogoConatiner>
        <SvgContainer
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <SVG heightPer={90} />
        </SvgContainer>

        <LogoImg src={html}></LogoImg>
      </LogoConatiner>
      <LogoConatiner>
        <SvgContainer
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          <SVG heightPer={90} />
        </SvgContainer>
        <LogoImg src={css}></LogoImg>
      </LogoConatiner>
      <LogoConatiner>
        <SvgContainer
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-delay="400"
        >
          <SVG heightPer={85} />
        </SvgContainer>

        <LogoImg src={sass}></LogoImg>
      </LogoConatiner>
      <LogoConatiner>
        <SvgContainer
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >
          <SVG heightPer={75} />
        </SvgContainer>
        <LogoImg src={js}></LogoImg>
      </LogoConatiner>
      <LogoConatiner>
        <SvgContainer
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          <SVG heightPer={75} />
        </SvgContainer>
        <LogoImg src={react}></LogoImg>
      </LogoConatiner>
    </TechnicalSkill>
  );
};

export default TechnicalSkills;
