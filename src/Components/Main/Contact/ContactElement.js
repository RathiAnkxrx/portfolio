import styled from "styled-components";
import { COLOR, WIDTH } from "../../../constant";

export const ContactContainer = styled.section`
  width: 100%;
  background: ${COLOR.grayMid};
  margin-top: 8vw;
  padding: 0 2.4rem;
`;

export const ContactWrapper = styled.div`
  max-width: ${WIDTH.desktop};
  width: 100%;
  padding: 6.4rem;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 600px) {
    padding: 4.8rem 0;
  }
`;

export const ContactIcon = styled.div`
  font-size: 6.4rem;
  color: ${COLOR.blueLight};
`;

export const ContactMessage = styled.p`
  font-size: 2rem;
  line-height: 2.8rem;
  color: ${COLOR.White};
  margin: 2.4rem;
`;

export const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${COLOR.White};
  width: 16rem;
  margin: 0 auto;
  font-weight: 700;
  height: 4.2rem;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover,
  &:active {
    background: ${COLOR.blueLight};
    border: 2px solid ${COLOR.blueLight};
  }
`;
