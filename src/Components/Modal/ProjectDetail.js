import {
  ProjectButton,
  ProjectImg,
  ProjectH2,
  ProjectDesc,
  ProjectInfo,
  LinkButtons,
  CancelButtonConatiner,
  CancelButton,
} from "./ModalElement";
import VisibleContext from "../../store/context";
import { useContext } from "react";
const ProjectDeatil = () => {
  const visCtx = useContext(VisibleContext);
  const data = visCtx.projectDes;

  const handleClick = (link) => {
    window.open(link);
  };
  return (
    <>
      <ProjectImg imgsrc={require(`../../asset/${data.imgsrc}`)} />
      <ProjectDesc>
        <ProjectH2>{data.name}</ProjectH2>

        <ProjectInfo>{data.shortDesc}</ProjectInfo>
        <LinkButtons>
          <ProjectButton onClick={handleClick.bind(null, `${data.github}`)}>
            View Code
          </ProjectButton>
          <ProjectButton onClick={handleClick.bind(null, `${data.liveSite}`)}>
            View Site
          </ProjectButton>
        </LinkButtons>
      </ProjectDesc>
      <CancelButtonConatiner>
        <CancelButton onClick={() => visCtx.hideProject()}>CANCEL</CancelButton>
      </CancelButtonConatiner>
    </>
  );
};

export default ProjectDeatil;
