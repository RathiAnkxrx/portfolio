import { MdSpeed, MdDevices } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import {
  AboutContainer,
  AboutWrapper,
  SkillsContainer,
  AboutH2,
  SkillsImg,
  SkillsIcon,
  SkillsWrapper,
  SkillHeading,
  SkillDesc,
  AboutDetails,
  AboutPersonal,
  PersonalImage,
  PersonalInfo,
  PersonalTitle,
  NavigateLink,
} from "./AboutElement";
import TechnicalSkills from "./TechnicalSkills";
import Resume from "./resume";

const data = [
  {
    icon: <MdSpeed />,
    title: `Fast`,
    desc: `Fast load times and lag free interaction, my highest priority.`,
  },
  {
    icon: <MdDevices />,
    title: `Responsive`,
    desc: `Fast load times and lag free interaction, my highest priority.`,
  },
  {
    icon: <FaRegLightbulb />,
    title: `Intutive`,
    desc: `Strong preference for easy to use, intuitive UX/UI.`,
  },
  {
    icon: <IoRocketOutline />,
    title: `Dynamic`,
    desc: `Websites don't have to be static, I love making pages come to
    life.`,
  },
];

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <AboutH2 data-aos="zoom-in" data-aos-duration="700">
            About
          </AboutH2>
          <SkillsContainer>
            {data.map((item, index) => {
              return (
                <SkillsWrapper
                  key={index}
                  data-aos="flip-left"
                  data-aos-duration="700"
                  data-aos-delay={index * 200}
                >
                  <SkillsImg>
                    <SkillsIcon>{item.icon}</SkillsIcon>
                  </SkillsImg>
                  <SkillHeading>{item.title}</SkillHeading>
                  <SkillDesc>{item.desc}</SkillDesc>
                </SkillsWrapper>
              );
            })}
          </SkillsContainer>

          <AboutDetails>
            <AboutPersonal>
              <PersonalImage />
              <PersonalTitle>Who's this guy?</PersonalTitle>
              <PersonalInfo>
                Hey! My name is Ankur and I'm a web developer with a passion for
                front end development and design. I'm currently working for
                <NavigateLink href="https://www.cognizant.com/in/en">
                  {" "}
                  Cognizant
                </NavigateLink>{" "}
                as PAT.
                <br />
                <br />
                I aspire towards a career that will allow me to channel my
                creativity through crafting beautiful software and engaging
                experiences.
                <br />
                <br />
                When I'm not on computer, I enjoy playing badminton,
                <NavigateLink
                  href="https://www.instagram.com/ankurrathi15/?hl=en"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  sketching
                </NavigateLink>
                .
              </PersonalInfo>
            </AboutPersonal>
            <TechnicalSkills />
          </AboutDetails>
        </AboutWrapper>
      </AboutContainer>
      <Resume />
    </>
  );
};
export default About;
