import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

function SocialMediaBarHorizontal() {
  return (
    <SocialMediaBarHeader>
      <div className="header-social">
        <h3 style={{ color: "#FFF",fontSize:14 }}>Follow Us</h3>
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
      </div>
    </SocialMediaBarHeader>
  )
}

const SocialMediaBarHeader = styled.header`
background-color: ${({ theme }) => theme.colors.footer_bg};
    .header-social {
    background-color: ${({ theme }) => theme.colors.footer_bg};
    display: flex;
    /* flex-direction: row; */
    /* align-items: center; */
    justify-content: end;
    padding-top:10px;
    /* position: fixed;
    top: 5px;
    right: 0; */
  }

  .icon-bar {
    display: flex;
    flex-direction: row;
    padding-left: 2rem;
    padding-right: 2rem;
    /* -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%); */
    /* z-index: 1; */
  }

  /* Style the icon bar links */
  .icon-bar a {
    display: block;
    text-align: center;
    /* padding: 16px; */
    transition: all 0.3s ease;
    color: white;
    font-size: 14px;
  }

  /* Style the social media icons with color, if you want */
  .icon-bar a:hover {
    background-color: #000;
  }

  .icons {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.4rem;
    /* position: relative; */
    cursor: pointer;
  }

  .facebook {
    background: #3b5998;
    color: white;
    margin-right: 10px;
  }

  .twitter {
    background: #55acee;
    color: white;
  }

  .instagram {
    background: red;
    color: white;
    margin-right: 10px;
  }
`

export default SocialMediaBarHorizontal
