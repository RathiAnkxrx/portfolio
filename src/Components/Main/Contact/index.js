import { IoMdPaperPlane } from "react-icons/io";
import {
  ContactContainer,
  ContactIcon,
  ContactLink,
  ContactMessage,
  ContactWrapper,
} from "./ContactElement";
const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactIcon data-aos="fade-down" data-aos-duration="700">
          <IoMdPaperPlane />
        </ContactIcon>
        <ContactMessage>
          Whether you have a idea or Want to work together, <br /> feel free to
          drop me an email!
        </ContactMessage>
        <ContactLink href="mailto:ankurrathi15@gmail.com">
          Say Hello
        </ContactLink>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
