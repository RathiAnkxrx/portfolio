import styled, { keyframes } from "styled-components";
import { COLOR, WIDTH } from "../../constant";

export const FooterContainer = styled.section`
  width: 100%;
  padding: 0 2.4rem;
  background: ${COLOR.blueDark};
`;

export const FooterWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  margin: 0 auto;
  padding: 4.8rem 0;
  position: relative;
  text-align: center;
`;

export const ScrollToTop = styled.button`
  position: absolute;
  top: 0%;
  left: 50%;
  background: ${COLOR.cherry};
  cursor: pointer;
  border: none;
  transform: translate(-50%, -50%);
  padding: 1rem 0.5rem;
  font-size: 3.2rem;
  color: ${COLOR.White};
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  gap: 2.4rem;
  justify-content: center;
  margin: 3.2rem 0;
`;

export const AccountLink = styled.a`
  height: 5.2rem;
  width: 5.2rem;
  font-size: 3.2rem;
  background: ${COLOR.blueLight};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: ${COLOR.green};
  }
`;

export const FooterCredit = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  color: ${COLOR.blueText};
`;

export const FooterSpan = styled.span`
  color: ${COLOR.cherry};
`;
