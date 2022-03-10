import styled from "styled-components";
import Home from ".";
import bgimg from "../../../asset/working-background.jpg";
import lndimg from "../../../asset/bglandscape.png";
import { COLOR, TRANSITION, WIDTH } from "../../../constant";
export const HomeContainer = styled.section`
  height: max(105vh, 50rem);
  width: 100%;
  background-image: linear-gradient(
      to right,
      ${COLOR.blueTrans},
      ${COLOR.blueTrans}
    ),
    url(${bgimg});
  background-size: cover;
  background-position: center;
  padding: 0 2.4rem;
  @media (max-width: 600px) {
    background-image: linear-gradient(
        to right,
        ${COLOR.blueTrans},
        ${COLOR.blueTrans}
      ),
      url(${lndimg});
  }
`;

export const HomeWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeH1 = styled.h1`
  color: ${COLOR.White};
`;

export const HomeSpan = styled.span`
  color: ${COLOR.cherry};
`;

export const HomeH2 = styled.h2`
  color: ${COLOR.White};
`;

export const HomeButton = styled.button`
  margin-top: 1.8rem;
  width: 22rem;
  height: 4.8rem;
  border: 2px solid ${COLOR.White};
  background: transparent;
  font-size: 2rem;
  color: ${COLOR.White};
  font-family: inherit;
  letter-spacing: 1px;
  transition: all ${TRANSITION.ease};
  &:hover {
    cursor: pointer;
    background: ${COLOR.green};
    border: 2px solid ${COLOR.green};
  }
  &:hover > * {
    transition: transform 0.3s ease;
    transform: rotate(90deg);
  }
`;

export const HomeIcon = styled.div`
  margin-left: 0.8rem;
  display: inline-block;
  font-size: 1.6rem;
`;
