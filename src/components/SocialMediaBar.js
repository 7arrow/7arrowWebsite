import React from "react";
import styled from "styled-components";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";

const Wrapper = styled.section`
  /* Fixed/sticky icon bar (vertically aligned 50% from the top of the screen) */
  .icon-bar {
    position: fixed;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 1;
  }

  /* Style the icon bar links */
  .icon-bar a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.3s ease;
    color: white;
    font-size: 20px;
  }

  /* Style the social media icons with color, if you want */
  .icon-bar a:hover {
    background-color: #000;
  }

  .facebook {
    background: #3b5998;
    color: white;
  }

  .twitter {
    background: #55acee;
    color: white;
  }

  .instagram {
    background: red;
    color: white;
  }

  .icons {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.4rem;
    position: relative;
    cursor: pointer;
  }
`;

function SocialMediaBar() {
  return (
    <Wrapper>
      <div className="icon-bar">
        <a
          href="https://www.facebook.com/7Arrow.in"
          target="_blank"
          className="facebook"
        >
          <FaFacebook className="icons" />
        </a>
        <a
          href="https://www.instagram.com/7arrow.in"
          target="_blank"
          className="instagram"
        >
          <FaInstagram className="icons" />
        </a>
        <a
          href="https://twitter.com/7ArrowOfficial"
          target="_blank"
          className="twitter"
        >
          <FaTwitter className="icons" />
        </a>
      </div>
    </Wrapper>
  );
}

export default SocialMediaBar;

{
  /* <a href="#" class="facebook">
    <i class="fa fa-facebook"></i>
</a>
<a href="#" class="twitter">
   <i class="fa fa-twitter"></i>
</a> 
 <a href="#" class="google">
    <i class="fa fa-google"></i>
</a>
<a href="#" class="linkedin">
    <i class="fa fa-linkedin"></i>
</a>
<a href="#" class="youtube">
    <i class="fa fa-youtube"></i>
</a> */
}

/* .google {
    background: #dd4b39;
    color: white;
  }

  .linkedin {
    background: #007bb5;
    color: white;
  }

  .youtube {
    background: #bb0000;
    color: white;
  } */
