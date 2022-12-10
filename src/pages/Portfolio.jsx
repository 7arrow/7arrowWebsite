import React, { useState } from "react";
import styled from "styled-components";
import ImageCarousel from "../components/ImageCarousel";

// import Modal from "react-bootstarp/Modal";
// import { Modal, Button } from "bootstrap";
import { Modal } from "react-bootstrap";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState([]);

  // function openModal() {
  //   setShowModal(!showModal);
  // }
  function MyVerticallyCenteredModal(props) {
    console.log("Selected Project : ", props.data);
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // backdrop = "static"
        fullscreen="true"
        // aria-labelledby="example-custom-modal-styling-title"
        contentClassName="modalContainer"
      >
        <Modal.Header style={{justifyContent: "center"}}>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p> */}
          <ImageCarousel data={props.data} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Completed Projects</h2>
      <div className="container grid grid-three-column">
        {projects.map((currElem) => {
          const { id, name } = currElem;
          const images = currElem.images;
          return (
            <div
              className="card"
              key={id}
              onClick={() => {
                setShowModal(true);
                setSelectedProject(currElem);
              }}
            >
              <figure>
                <img src={images[0].src} alt={name} />
              </figure>
              <div className="card-data">
                <h3>{name}</h3>
              </div>
            </div>
          );
        })}
      </div>
      {/* <ImageCarousel toggle={showModal} action={openModal} /> */}

      <MyVerticallyCenteredModal
        show={showModal}
        onHide={() => setShowModal(false)}
        data={selectedProject}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
      justify-content: center;
      align-items: center;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
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

  .modal {
    background-color: black;
  }

  /*  */
`;

const projects = [
  {
    id: 1,
    name: "Casetrack",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/Casetracks/iPhone with Casetracks Dashboard - Client.png",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/Casetracks/iPhone with Casetracks Menu - Client.png",
      },
      {
        id: 3,
        src: "./images/PortfolioImages/Casetracks/iPhone with Casetracks - Client.png",
      },
      {
        id: 4,
        src: "./images/PortfolioImages/Casetracks/iPhone with Casetracks Message Chain - Client.png",
      },
      // coverImage:
      //   "./images/PortfolioImages/Casetracks/iPhone with Casetracks Dashboard - Client.png",
      // image1:
      //   "./images/PortfolioImages/Casetracks/iPhone with Casetracks Menu - Client.png",
      // image2:
      //   "./images/PortfolioImages/Casetracks/iPhone with Casetracks - Client.png",
      // image3:
      //   "./images/PortfolioImages/Casetracks/iPhone with Casetracks Message Chain - Client.png",
    ],
  },
  {
    id: 2,
    name: "Hotel App",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/Hotel App/iPhone with Hotel app login.png",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/Hotel App/iPhone with Hotel app menus.png",
      },
      {
        id: 3,
        src: "./images/PortfolioImages/Hotel App/iPhone with Hotel app side menu.png",
      },
      {
        id: 4,
        src: "./images/PortfolioImages/Hotel App/iPhone with Hotel app table select.png",
      },
    ],
  },
  {
    id: 3,
    name: "HairStyleWale App",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/HairStyleWale/iPhone with HairStyleWale login.png",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/HairStyleWale/iPhone with HairStyleWale reset password.png",
      },
      {
        id: 3,
        src: "./images/PortfolioImages/HairStyleWale/iPhone with HairStyleWale signup.png",
      },
    ],
  },
  {
    id: 4,
    name: "GPS Login",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/GPS Login/iPhone with GPS Login screen1.png",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/GPS Login/iPhone with GPS Login screen2.png",
      },
    ],
  },
  {
    id: 5,
    name: "Bluetooth Printer",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/Bluetooth Printer/iPhone with Bluetooth Printer screen1.png",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/Bluetooth Printer/iPhone with Bluetooth Printer screen2.png",
      },
      {
        id: 3,
        src: "./images/PortfolioImages/Bluetooth Printer/iPhone with Bluetooth Printer screen3.png",
      },
    ],
  },
  {
    id: 6,
    name: "Fingerprint Demo App",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/Fingerprint Demo/iPhone with Fingerprint screen 1.png",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/Fingerprint Demo/iPhone with Fingerprint screen 2.png",
      },
      {
        id: 3,
        src: "./images/PortfolioImages/Fingerprint Demo/iPhone with Fingerprint screen 3.png",
      },
    ],
  },
  {
    id: 7,
    name: "Info Storage App",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/Info Storage/iPhone with Info storage product info.png",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/Info Storage/iPhone with Info storage product list.png",
      },
      {
        id: 3,
        src: "./images/PortfolioImages/Info Storage/iPhone with Info storage view product info.png",
      },
    ],
  },
];

export default Portfolio;
