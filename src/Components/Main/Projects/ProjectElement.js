import styled from "styled-components";
import { COLOR, TRANSITION, WIDTH } from "../../../constant";

export const ProjectContainer = styled.section`
  width: 100%;
  padding: 0 2.4rem;
  margin: 4.8rem 0;
`;
export const ProjectWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProjectTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 1.2rem;
`;

export const TitleSpan = styled.span`
  font-size: 1.2rem;
  opacity: 0.6;
  letter-spacing: 1.5px;
`;

export const ProjectGallery = styled.div`
  margin: 3vw 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 32%));
  justify-content: space-between;
  row-gap: 2.4rem;
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 48%));
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    max-width: 80%;
  }
`;

export const Gallery = styled.div`
  width: 100%;
  height: 25rem;
  background-image: url(${(props) => props.imgsrc});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  transition: background ${TRANSITION.ease};

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${(props) => props.imgsrc});
    background-size: cover;
    background-position: center;
  }
  &:hover > * {
    opacity: 1;
    &:first-child {
      top: 24%;
    }
    &:last-child {
      bottom: 24%;
    }
  }
`;

export const GalleryText = styled.p`
  position: absolute;
  top: 0%;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLOR.White};
  text-align: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

export const GalleryButton = styled.button`
  width: 18rem;
  height: 3.8rem;
  font-size: 1.8rem;
  position: absolute;
  bottom: 0%;
  border: 2px solid ${COLOR.cherry};
  background: transparent;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: ${COLOR.White};
  opacity: 0;
  &:hover {
    background: ${COLOR.cherry};
  }
`;
