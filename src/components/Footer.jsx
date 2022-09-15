import { memo } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import {Zoom} from "react-reveal"
function Footer() {
  return (
    <Zoom>
    <div className="flex justify-center space-x-5 py-5" id="contact">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/tấn-tài-nguyễn-08187a220/"
      >
        <AiFillLinkedin size={50} className="hover:text-sky-500" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/taitan02">
        <AiFillGithub size={50} className="hover:text-white" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/tai.nguyen0299/">
        <FaFacebookSquare size={50} className="hover:text-blue-700" />
      </a>
    </div>
    </Zoom>
  );
}

export default memo(Footer);
