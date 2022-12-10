import React from "react";
import styled from "styled-components";

import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <h3 className="hero-top-data">Who We Are</h3>
          <h3 className="hero-heading">{name}</h3>
          <p className="hero-para">
            We are the team of talanted developers, computer engineers,
            expertise in various programming technology with various solution
            for your need. Our expert team of Developers & Digital Strategists
            use cutting edge technology & best practices to create custom
            solutons that increase user engagement.
          </p>
          {/* <div className="visible-xs visible-sm"> */}
            <hr />
          {/* </div> */}
          <h3 className="hero-top-data">What We Do</h3>
          <p>
            Our creative website designers offers various solutions for your
            business, thus establishing an instant connection with your
            customers. We help you create a functional and high-performing apps
            and websites through our effective mobile and web development
            services
          </p>
          <h3 className="hero-top-data">Why Choose Us</h3>
          <p>
            7arrow.in is a passionate and result oriented company based in
            India. From delivering high-end website design to executing highly
            successful mobile and web apps. Our well-laid strategy based on
            stats and experince ensure the success of clients that we deal with.
          </p>
          {/* <Button className="btn hireme-btn">
            <NavLink to="/contact">hire me</NavLink>
          </Button> */}
        </div>

        {/* For Image */}
        <div className="section-hero-image">
          <picture>
            <img
              // src="./images/hero.svg"
              src={image}
              alt="hero img"
              className="hero-img"
            />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
    color: #47b2e4;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
