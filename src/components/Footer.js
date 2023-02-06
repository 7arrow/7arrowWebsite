import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>
          <div className="contact-short-btn">
            <NavLink to="/contact">
              <Button onClick={goToBtn}>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer>
        <div className="container grid grid-three-column">
          {/* 1st column */}
          <div className="footer-about">
            <h3>7Arrow.in</h3>
            <p>Where innovation meets experience</p>
          </div>
          {/* 2nd column */}
          {/* <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                autoComplete="off"
                required
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div> */}
          {/* 3rd column */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://www.facebook.com/7Arrow.in" target="_blank">
                  <FaFacebook className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/7arrow.in" target="_blank">
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/7ArrowOfficial" target="_blank">
                  <FaTwitter className="icons" />
                </a>
              </div>
            </div>
          </div>
          {/* 4th column */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>9011999711</h3>
            {/* <h3>8668344896</h3> */}
          </div>
        </div>

        {/* bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} 7Arrow.in All Rights Reserved</p>
            <div className="privacyDiv">
              <NavLink to="/privacyPolicy">
                <p onClick={goToBtn}>PRIVACY POLICY</p>
              </NavLink>
              <NavLink to="/t&c">
                <p onClick={goToBtn}>TERMS & CONDITIONS</p>
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 3rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  .footer-about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .footer-social {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .footer-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .privacyDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* justify-content: center; */
  }

  footer {
    padding: 9rem 0 3rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      /* margin-bottom: 2.4rem; */
    }

    p {
      color: ${({ theme }) => theme.colors.white};
      margin-top: 0.1rem;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 3rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: center;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
