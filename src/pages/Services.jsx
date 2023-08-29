import styled from "styled-components";

import {
  DiAndroid,
  DiApple,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiAngularSimple,
  DiJqueryLogo,
  DiPhp,
  DiDotnet,
  DiNodejs,
  DiPython,
  DiWordpress,
  DiReact,
  DiMysql,
  DiMongodb,
  DiSwift,
} from "react-icons/di";

import PageTitle from "../components/PageTitle";

function ServicesPage() {
  return (
    <div>
      <PageTitle title="Our Services" />
      <Wrapper className="section">
        {/* <h2 className="common-heading">Our Services</h2> */}
        <div className="container grid grid-three-column">
          {services.map((curElem) => {
            const { id, name, image, description } = curElem;
            return (
              <div key={id} className="card">
                <figure>
                  <img src={image} alt={name} />
                </figure>
                <div className="card-data">
                  <div>
                    <h3>{name}</h3>
                  </div>
                  <div>
                    <p>{description}</p>
                  </div>
                  {/* <div style={{backgroundColor: "red", marginTop: "auto"}}>
                <NavLink to="/service">
                  <Button className="btn">Read More</Button>
                </NavLink>
                </div> */}
                </div>
              </div>
            );
          })}
        </div>

        <hr style={{ margin: "5rem" }} />

        <h2 className="common-heading">Technologies We Use</h2>
        <div className="container grid grid-six-column">
          {technologies.map((tech) => {
            const { id, techName } = tech;
            return (
              <div key={id} className="techContainer">
                <tech.iconName className="tech" />
                <h3>{techName}</h3>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  padding: 5rem 5rem;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data {
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }

    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .techContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .tech {
      font-size: 2.4rem;
      width: 6rem;
      height: 6rem;
      /* color: #fff; */
      background-color: ${({ theme }) => theme.colors.bg_white};
      box-shadow: ${({ theme }) => theme.colors.shadow};
      border-radius: 50%;
    }
  }
  .grid-six-column {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
    .grid-six-column {
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      justify-content: center;
    }
  }
`;

const services = [
  {
    id: 1,
    name: "Web Design",
    image: "./images/webdesign.png",
    description:
      "We specialize in building web design that attract the target audience.",
  },
  {
    id: 2,
    name: "Web Development",
    image: "./images/webdev .jpg",
    description:
      "We have a strong portfolio of successful best website development services across many industries.",
  },
  {
    id: 3,
    name: "Mobile Applications",
    image: "./images/mobileapp.png",
    description:
      "We are one of the top ios & android development companies of India because we make sure we turn your complex needs into quality reality App.",
  },
  // {
  //   id: 4,
  //   name: "Digital Marketing",
  //   image: "./images/marketing.png",
  //   description: "We Provide Digital marketing service which includes bulk SMS and emails services.",
  // },
];

const technologies = [
  {
    id: 1,
    iconName: DiAndroid,
    techName: "Android",
  },
  {
    id: 2,
    iconName: DiApple,
    techName: "Apple",
  },
  {
    id: 3,
    iconName: DiJavascript1,
    techName: "Javascript",
  },
  {
    id: 4,
    iconName: DiReact,
    techName: "React",
  },
  {
    id: 5,
    iconName: DiBootstrap,
    techName: "Bootstrap",
  },
  {
    id: 6,
    iconName: DiAngularSimple,
    techName: "Angular",
  },
  {
    id: 7,
    iconName: DiCss3,
    techName: "Css3",
  },
  {
    id: 8,
    iconName: DiDotnet,
    techName: "DotNet",
  },
  {
    id: 9,
    iconName: DiHtml5,
    techName: "Html5",
  },
  {
    id: 10,
    iconName: DiJqueryLogo,
    techName: "Jquery",
  },
  {
    id: 11,
    iconName: DiMongodb,
    techName: "MongoDb",
  },
  {
    id: 12,
    iconName: DiMysql,
    techName: "MySql",
  },
  {
    id: 13,
    iconName: DiNodejs,
    techName: "NodeJs",
  },
  {
    id: 14,
    iconName: DiPhp,
    techName: "Php",
  },
  {
    id: 15,
    iconName: DiPython,
    techName: "Python",
  },
  {
    id: 16,
    iconName: DiWordpress,
    techName: "Wordpress",
  },
  {
    id: 17,
    iconName: DiSwift,
    techName: "Swift",
  },
];

export default ServicesPage;
