import styled from "styled-components";
import { COLOR, WIDTH } from "../../constant";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ModalOverlay = styled.div`
  margin: 2.4rem auto;
  max-width: ${WIDTH.project};
  height: min-content;
  border-radius: 0.8rem;
  width: 100%;
  background: ${COLOR.White};
  overflow: hidden;
`;

export const ProjectImg = styled.div`
  width: 100%;
  height: 40rem;
  border-bottom: 2px solid ${COLOR.blueDark};
  background: url(${(props) => props.imgsrc});
  background-size: cover;
  background-position: center;
`;

export const ProjectDesc = styled.div`
  padding: 3.4rem 2.4rem 2.4rem;
  width: 100%;
`;
export const ProjectH2 = styled.h2`
  color: ${COLOR.blueTrans};
  padding-bottom: 1.2rem;
  font-weight: 700;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

export const ProjectButton = styled.button`
  width: 12rem;
  height: 4.2rem;
  color: ${COLOR.White};
  border: none;
  font-size: 1.6rem;
  background: ${COLOR.cherry};
  margin-right: 2.4rem;
  text-transform: uppercase;
  cursor: pointer;
  &:active {
    transform: translateY(-1px);
  }
`;

export const ProjectInfo = styled.p`
  padding: 1.8rem 0;
  opacity: 0.6;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding-right: 5%;
`;

export const LinkButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CancelButtonConatiner = styled.div`
  width: 100%;
  height: 6.4rem;
  background: ${COLOR.blueLight};
  padding: 1rem 2.4rem;
  display: flex;
  justigy-content: right;
`;

export const CancelButton = styled.button`
  width: 12rem;
  height: 3.4rem;
  margin-left: auto;
  cursor: pointer;
  font-family: inherit;
  cursor: pointer;
  &:active {
    transform: translateY(-1px);
  }
`;
