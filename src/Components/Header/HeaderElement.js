import styled from "styled-components";
import { COLOR, WIDTH, HEIGHT, TRANSITION } from "../../constant";
export const HeaderConatiner = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: ${(props) =>
    props["data-scroll"]
      ? `${HEIGHT.navScrolledHeight}`
      : `${HEIGHT.navHeight}`};
  width: 100%;
  background: ${(props) =>
    props["data-scroll"] ? `${COLOR.blueDark}` : "transparent"};
  padding: 0 2.4rem;
  transition: all 0.8s ease-in-out;
  z-index: 9;
  @media (max-width: 600px) {
    background: ${(props) =>
      props["data-open"] || props["data-scroll"]
        ? `${COLOR.blueDark}`
        : "transparent"};
  }
`;

export const HeaderWrapper = styled.div`
  height: 100%;
  max-width: ${WIDTH.desktop};
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLOR.White};
`;

export const HeaderName = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 2.4rem;
  font-weight: 500;
`;

export const HeaderNav = styled.ul`
  display: flex;
  gap: 2.4rem;
  @media (max-width: 600px) {
    width: 100%;
    position: absolute;
    left: 0;
    height: min-content;
    padding: 1.8rem 2.4rem;
    flex-direction: column;
    justify-item: center;
    align-item: center;
    transition: transform 0.5s ease-in;
    top: ${(props) =>
      props["data-scroll"]
        ? `${HEIGHT.navScrolledHeight}`
        : `${HEIGHT.navHeight}`};
    background: ${COLOR.blueDark};
    transform: ${(props) =>
      props["data-open"] ? "translateY(0)" : "translateY(-200%)"};
  }
`;

export const NavItem = styled.li``;

export const NavLinks = styled.a`
  text-transform: uppercase;
  transition: color ${TRANSITION.easeIn};
  cursor: pointer;
  font-weight: 700;
  &:hover {
    color: ${COLOR.cherry};
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

export const HomeIcon = styled.i`
  width: 0.8rem;
  color: ${COLOR.White};
`;
