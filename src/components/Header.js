import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import SocialMediaBarHorizontal from "./SocialMediaBarHorizontal";

const Header = () => {
  return (
    <div>
      {/* <SocialMediaBarHorizontal /> */}
      <MainHeader>
        <NavLink to="/">
          <img
            className="logo"
            src="./images/7arrow_logo_transparent.png"
            alt="Logo"
          />
          {/* <img className='logo' src='./images/7arrow-final-logo.png' alt='Logo' /> */}
          {/* <div className="logo">
          <h1 style={{color: '#8490ff'}}>
            <span>7</span>Arrow.in
          </h1>
        </div> */}
        </NavLink>
        <Navbar />
      </MainHeader>
    </div>
  );
};

const MainHeader = styled.header`
  padding: 0 4rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.footer_bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .logo {
      height: auto;
      max-width: 60%;
    }
  }
`;

export default Header;
