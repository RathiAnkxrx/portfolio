import reactDom from "react-dom";
import { BackDrop, ModalOverlay, OverlayConatiner } from "./ModalElement";
import VisibleContext from "../../store/context";
import { useContext, useEffect } from "react";
import ProjectDeatil from "./ProjectDetail";
const Modal = () => {
  const visCtx = useContext(VisibleContext);
  const parentElement = document.getElementById("overlay");
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isOverlay = e.target.getAttribute("data-overlay") === "true";
      if (isOverlay) {
        visCtx.hideProject();
      }
    });
  }, [visCtx]);
  return (
    <>
      {reactDom.createPortal(
        <BackDrop data-overlay>
          <ModalOverlay>
            <ProjectDeatil />
          </ModalOverlay>
        </BackDrop>,
        parentElement
      )}
    </>
  );
};

export default Modal;
