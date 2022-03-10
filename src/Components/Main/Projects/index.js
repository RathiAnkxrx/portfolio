import ProjectList from "./ProjectList";
import {
  ProjectContainer,
  ProjectTitle,
  ProjectWrapper,
  TitleSpan,
} from "./ProjectElement";

const Projects = () => {
  return (
    <ProjectContainer id="portfolio">
      <ProjectWrapper>
        <ProjectTitle>What i've done</ProjectTitle>
        <TitleSpan>(more coming soon)</TitleSpan>
        <ProjectList />
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Projects;
