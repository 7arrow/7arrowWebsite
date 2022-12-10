import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
// import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const ImageCarousel = ({ data }) => {
  const [projectImages, setProjectImages] = useState(data.images);
  console.log("Project data in ImageCarousel: ", projectImages);
  return (
    <Wrapper>
      {/* <div className="container"> */}
        {/* <h3>{data.name} Image Carousel</h3> */}

        <Carousel>
          {projectImages.map((image) => {
            return (
              <Carousel.Item key={image.id}>
                <img
                  className="d-block w-50"
                  src={image.src}
                  alt="First slide"
                  style={{margin:"auto", maxHeight: "85vh", maxWidth: "50vh"}}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      {/* </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* display: flex; */
  width: 100%;
  height: 90vh;
  /* padding: 15rem; */
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .carousel {
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: gray;
    /* margin: 0 auto; */
  }
  /* .carousel-inner img {
      margin: auto;
    } */
    /* .carousel-control-prev-icon {
 background-color: black;
 color: red;
}
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffffff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
} */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 50px;
  width: 50px;
  /* outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  border: 1px solid black;
  background-image: none; */
}

/* .carousel-control-next-icon:after
{
  content: '>';
  font-size: 20px;
  color: white;
}

.carousel-control-prev-icon:after {
  content: '<';
  font-size: 20px;
  color: white;
} */
    
`;

export default ImageCarousel;
