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
          Wheather have a idea or Want to work together, <br /> fell free to
          drop me an email!
        </ContactMessage>
        <ContactLink>Say Hello</ContactLink>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;