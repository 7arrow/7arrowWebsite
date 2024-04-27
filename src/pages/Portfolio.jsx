import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import ImageCarousel from "../components/ImageCarousel";
import PageTitle from "../components/PageTitle";

// import { Modal } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Portfolio = () => {
  // const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState([]);
  const [fullScreen, setFullScreen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (width <= 768) {
      setFullScreen(true);
    } else {
      setFullScreen(false);
    }
  }, [width]);

  return (
    <div>
      <PageTitle title="Our Completed Projects" />
      <Wrapper className="section">
        {/* <h2 className="common-heading">Our Completed Projects</h2> */}
        <div className="container grid grid-three-column">
          {projects.map((currElem) => {
            const { id, name } = currElem;
            const images = currElem.images;
            return (
              <div
                className="card"
                key={id}
                onClick={() => {
                  // setShowModal(true);
                  setSelectedProject(currElem.images);
                  setOpen(true);
                }}
              >
                <figure className="images">
                  <img src={images[0].src} alt={name} className="photo" />
                  <img src={images[1].src} alt={name} className="photo" />
                  {images[2] ? (
                    <img src={images[0].src} alt={name} className="photo" />
                  ) : null}
                </figure>
                <div className="card-data">
                  <h3>{name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slideshow={{ autoplay: true, delay: 4000 }}
          fullscreen={fullScreen}
          plugins={[Thumbnails, Slideshow, Fullscreen]}
          // slides={[
          //   { src: selectedProject[0].src },
          //   { src: selectedProject[1].src },
          //   { src: selectedProject[2].src },
          // ]}
          slides={selectedProject.map((image, id) => {
            return {
              src: image.src,
            };
          })}
        />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  padding: 5rem 5rem;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 1rem;
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

  .images {
    display: flex;
    flex-wrap: wrap;
    margin: 0 10px;
    padding: 10px;
  }

  .photo {
    max-width: 30%;
    padding: 0 10px;
    height: 150px;
  }

  .photo img {
    width: 100%;
    height: 100%;
  }

  /* @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .modal {
      margin: auto;
    }
    .modal-dialog {
      position: absolute;
      height: 50%;
      width: 50%;
    }
    .modal-md {
      margin: auto;
    }
    .modal-dialog-centered {
      display: flex;
      margin: auto;
      align-items: center;
    }
  } */
`;

const projects = [
  {
    id: 1,
    name: "Bettermind App",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Login.jpg",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Home.jpg",
      },
      {
        id: 3,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Courses.jpg",
      },
      {
        id: 4,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Course_Details.jpg",
      },
      {
        id: 5,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Course_VideoScreen.jpg",
      },
      {
        id: 6,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Ebook.jpg",
      },
      {
        id: 7,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Ebook_Details.jpg",
      },
      {
        id: 8,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Calender.jpg",
      },
      {
        id: 9,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Counselors.jpg",
      },
      {
        id: 10,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Counselor_Profile.jpg",
      },
      {
        id: 11,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Profile.jpg",
      },
      {
        id: 12,
        src: "./images/PortfolioImages/Bettermind/BetterMind_MyJournal.jpg",
      },
      {
        id: 13,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Assesment.jpg",
      },
      {
        id: 14,
        src: "./images/PortfolioImages/Bettermind/BetterMind_Assessment_Questions.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Mumtreprenuer App",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/Mumtreprenuer App/Mumtrepreneurs_login.jpg",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/Mumtreprenuer App/Mumtrepreneurs_dashboard.jpg",
      },
      {
        id: 3,
        src: "./images/PortfolioImages/Mumtreprenuer App/Mumtrepreneurs_more.jpg",
      },
      {
        id: 4,
        src: "./images/PortfolioImages/Mumtreprenuer App/Mumtrepreneurs_profile.jpg",
      },
      {
        id: 5,
        src: "./images/PortfolioImages/Mumtreprenuer App/Mumtrepreneurs_resources.jpg",
      },
      {
        id: 6,
        src: "./images/PortfolioImages/Mumtreprenuer App/Mumtrepreneurs_features.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Dairy Service App",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/Dairy Service App/DairyService_dashboard.jpg",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/Dairy Service App/DairyServiceApp_login.jpg",
      },
      {
        id: 3,
        src: "./images/PortfolioImages/Dairy Service App/DairyServiceApp_signup.jpg",
      },
      {
        id: 4,
        src: "./images/PortfolioImages/Dairy Service App/DairyServiceApp_drawer.jpg",
      },
      {
        id: 5,
        src: "./images/PortfolioImages/Dairy Service App/DairyService_serviceDetails.jpg",
      },
      {
        id: 6,
        src: "./images/PortfolioImages/Dairy Service App/DairyServiceApp_newInstallation.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Master App",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/MasterApp/MasterApp_Login.jpg",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/MasterApp/MasterApp_Signup.jpg",
      },
      {
        id: 3,
        src: "./images/PortfolioImages/MasterApp/MasterApp_Drawer.jpg",
      },
      {
        id: 4,
        src: "./images/PortfolioImages/MasterApp/MasterApp_Fault_Master.jpg",
      },
      {
        id: 5,
        src: "./images/PortfolioImages/MasterApp/MasterApp_AddFault_New.jpg",
      },
      {
        id: 6,
        src: "./images/PortfolioImages/MasterApp/MasterApp_Visit_Master.jpg",
      },
      {
        id: 7,
        src: "./images/PortfolioImages/MasterApp/MasterApp_AddVisit_New.jpg",
      },
      {
        id: 8,
        src: "./images/PortfolioImages/MasterApp/MasterApp_Service_Report_New2.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Arogyaveda App",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/Arogyaveda/Arogyaveda_Login.jpg",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/Arogyaveda/Arogyaveda_Drawer.jpg",
      },
      {
        id: 3,
        src: "./images/PortfolioImages/Arogyaveda/Arogyaveda_Home.jpg",
      },
      {
        id: 4,
        src: "./images/PortfolioImages/Arogyaveda/Arogyaveda_Register_User.jpg",
      },
      {
        id: 5,
        src: "./images/PortfolioImages/Arogyaveda/Arogyaveda_Reports.jpg",
      },
      {
        id: 6,
        src: "./images/PortfolioImages/Arogyaveda/Arogyaveda_Report_Details.jpg",
      },
      {
        id: 7,
        src: "./images/PortfolioImages/Arogyaveda/Arogyaveda_Update_Subscription.jpg",
      },
      {
        id: 8,
        src: "./images/PortfolioImages/Arogyaveda/Arogyaveda_Update_UserPassword.jpg",
      },
      {
        id: 9,
        src: "./images/PortfolioImages/Arogyaveda/Arogyaveda_User.jpg",
      },
      {
        id: 10,
        src: "./images/PortfolioImages/Arogyaveda/Arogyaveda_UserDetails.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Social App",
    images: [
      {
        id: 1,
        src: "./images/PortfolioImages/Social App/SocialApp_login.jpg",
      },
      {
        id: 2,
        src: "./images/PortfolioImages/Social App/SocialApp_signup.jpg",
      },
      {
        id: 3,
        src: "./images/PortfolioImages/Social App/SocialApp_dashboard.jpg",
      },
      {
        id: 4,
        src: "./images/PortfolioImages/Social App/SocialApp_profile.jpg",
      },
      {
        id: 5,
        src: "./images/PortfolioImages/Social App/SocialApp_editProfile.jpg",
      },
      {
        id: 6,
        src: "./images/PortfolioImages/Social App/SocialApp_uploadPhoto.jpg",
      },
      {
        id: 7,
        src: "./images/PortfolioImages/Social App/SocialApp_messages.jpg",
      },
      {
        id: 8,
        src: "./images/PortfolioImages/Social App/SocialApp_addPost.jpg",
      },
      {
        id: 9,
        src: "./images/PortfolioImages/Social App/SocialApp_dashboardDark.jpg",
      },
      {
        id: 10,
        src: "./images/PortfolioImages/Social App/SocialApp_profileDark.jpg",
      },
      {
        id: 11,
        src: "./images/PortfolioImages/Social App/SocialApp_editProfileDark.jpg",
      },
      {
        id: 12,
        src: "./images/PortfolioImages/Social App/SocialApp_messagesDark.jpg",
      },
    ],
  },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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

/* <ImageCarousel toggle={showModal} action={openModal} /> */
/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */

/* <MyVerticallyCenteredModal
            show={showModal}
            onHide={() => setShowModal(false)}
            data={selectedProject}
            className="modal"
          /> */

/* </div> */

// function MyVerticallyCenteredModal(props) {
//   console.log("Selected Project : ", props.data.images);
//   return (
//     <Modal
//       {...props}
//       size="md"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       fullscreen="true"
//       contentClassName="modalContainer"
//     >
//       <Modal.Header style={{ justifyContent: "center" }}>
//         <Modal.Title id="contained-modal-title-vcenter">
//           {props.data.name}
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <ImageCarousel data={props.data} />
//       </Modal.Body>
//     </Modal>
//   );
// }

/* <div class="images">
    <div class="photo">
      <img src={images[0].src} alt="photo" />
    </div>

    <div class="photo">
      <img src={images[1].src} alt="photo" />
    </div>
    {images[2] ? 
    <div class="photo">
      <img src={images[2].src} alt="photo" />
    </div> : null }
  </div> */
