import React from "react";
import { FollowDiv } from "../styles/section/Follow.styled";
import { FaTwitterSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Anchor } from "../styles/layout/Nav.styled";
const Follow = () => {
  return (
    <>
      <FollowDiv id="follow">
        <div className="social-wrapper">
          <Anchor href="https://github.com/Ritesh134340" target="_blank">
            <FaGithub />
          </Anchor>

          <Anchor
            href="https://www.linkedin.com/in/ritesh134340/"
            target="_blank"
          >
            <FaLinkedin />
          </Anchor>

          <Anchor href="https://twitter.com/home" target="_blank">
            <FaTwitterSquare />
          </Anchor>
        </div>

        <div className="copy">
          <p>Made with 💖</p>
          <p>Copyright &copy; 2023 FSWD All Rights Reserved.</p>
        </div>
      </FollowDiv>
    </>
  );
};

export default Follow;
