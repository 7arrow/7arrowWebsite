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
                  // style={{margin:"auto", maxHeight: "85vh", maxWidth: "50vh"}}
                  style={{margin:"auto"}}
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
  /* width: 100%; */
  /* height: auto; */
  /* padding: 15rem; */
  /* justify-content: center; */
  /* align-items: center; */

  /* .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */

  .carousel {
    /* height: 100%; */
    /* width: 100%; */
    /* justify-content: center; */
    /* align-items: center; */
    background-color: gray;
  }
  
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 50px;
  width: 50px;
}
    
`;

export default ImageCarousel;
