import {
  ResumeButtom,
  ResumeConatiner,
  ResumeTitle,
  ResumeWrapper,
} from "./AboutElement";

import resume from "../../../asset/Resume.pdf";
import personal from "../../../asset/personal.jpg";
const Resume = () => {
  return (
    <ResumeConatiner>
      <ResumeWrapper>
        <ResumeTitle>Check out my résumé!</ResumeTitle>
        <ResumeButtom href={resume} download="Ankur's Resume">
          Grab A Copy
        </ResumeButtom>
      </ResumeWrapper>
    </ResumeConatiner>
  );
};

export default Resume;
