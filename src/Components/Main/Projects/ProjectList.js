import {
  Gallery,
  GalleryButton,
  GalleryText,
  ProjectGallery,
} from "./ProjectElement";
import ProjectInfo from "../../../data/ProjectData";
import VisibleContext from "../../../store/context";
import { useContext } from "react";
import Modal from "../../Modal";
const ProjectList = () => {
  const visCtx = useContext(VisibleContext);
  const handleClick = (item) => {
    visCtx.showProject();
    visCtx.setProject(item);
  };
  return (
    <ProjectGallery>
      {visCtx.visible && <Modal />}
      {ProjectInfo.map((item, index) => {
        return (
          <Gallery
            key={index}
            imgsrc={require(`../../../asset/${item.imgsrc}`)}
          >
            <GalleryText>{item.name}</GalleryText>
            <GalleryButton onClick={handleClick.bind(null, item)}>
              Learn More
            </GalleryButton>
          </Gallery>
        );
      })}
    </ProjectGallery>
  );
};

export default ProjectList;
