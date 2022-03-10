import styled from "styled-components";
import { COLOR, WIDTH, FONT, TRANSITION } from "../../../constant";
import personalImg from "../../../asset/personal.jpg";
import resumebg1 from "../../../asset/resumebg1.jpg";
import resumebg2 from "../../../asset/resumebg2.jpg";

export const AboutContainer = styled.section`
  width: 100%;
  margin: 8vw 0;
  padding: 2.4rem;
`;

export const AboutWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  margin: 0 auto;
`;
export const AboutH2 = styled.h2`
  margin: 0 auto;
  font-weight: 700;
  width: min-content;
  text-transform: uppercase;
  color: ${COLOR.grayDark};
  padding: 1rem;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 60%;
    height: 3px;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${COLOR.grayDark};
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 22%));
  justify-content: space-between;
  margin: 5vw 0;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 5vw;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const SkillsImg = styled.div`
  width: 11rem;
  height: 11rem;
  background: ${COLOR.green};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillsIcon = styled.div`
  font-size: 7rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLOR.White};
`;
export const SkillHeading = styled.p`
  color: ${COLOR.grayLight};
  margin: 1.2rem;
  ${FONT.subtitle}
`;

export const SkillDesc = styled.p`
  text-align: center;
  opacity: 0.6;
`;

export const AboutDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 47%));
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 5vw;
    max-width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const AboutPersonal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PersonalImage = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 100%;
  background: url(${personalImg});
  background-size: cover;
  background-position: center;
`;

export const PersonalTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLOR.grayDark};
  margin: 1.8rem;
`;

export const PersonalInfo = styled.p`
  text-align: center;
  opacity: 0.6;
  font-size: 300;
  padding: 0 1.8rem;
`;

export const NavigateLink = styled.a`
  color: blue;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const TechnicalSkill = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 30%));
  grid-template-rows: min-content;
  justify-content: space-between;
  align-items: center;
  row-gap: 5vw;
  @media (max-width: 1000px) {
    max-width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

export const LogoConatiner = styled.div`
  position: relative;
  max-width: 100%;
  height: 12rem;
  width: 12rem;
  border-radius: 100%;
  overflow: hidden;
`;
export const SvgContainer = styled.div`
  height: 12rem;
  width: 12rem;
  position: relative;
  justify-self: center;
  align-items: space-between;
`;
export const LogoImg = styled.img`
  position: absolute;
  cursor: pointer;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5.5rem;
  filter: grayScale(100%);
  transition: filter ${TRANSITION.ease};
  &:hover {
    filter: none;
  }
`;

export const ResumeConatiner = styled.div`
  width: 100%;
  margin: 8vw 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
    url(${resumebg1});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const ResumeWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  margin: 0 auto;
  padding: 10rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResumeTitle = styled.p`
  font-size: 3.4rem;
  color: ${COLOR.White};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 300;
  margin-bottom: 1.8rem;
`;

export const ResumeButtom = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14rem;
  height: 4.8rem;
  border: 2px solid ${COLOR.White};
  background: transparent;
  color: ${COLOR.White};
  font-size: 1.8rem;
  transition: all ${TRANSITION.ease};
  cursor: pointer;
  &:hover {
    width: 16rem;
    background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    );
  }
`;
