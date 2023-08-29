import React from "react";
import headerImg from "../images/Vector-Blue-Background.png";

import styled from "styled-components";

const PageHeaderTitle = styled.header`
  height: 100px;
  h1 {
    font-size: 5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }

  .text-left {
    margin-left: 15rem;
  }
`;

function PageTitle({ title }) {
  return (
    <PageHeaderTitle>
      <div
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop:10,
          paddingBottom:10
        }}
      >
        {/* <h1 className="pt-5 pb-3">{title}</h1> */}
        <h1 className="text-center align-middle">{title}</h1>
        {/* <h5>subTitle</h5> */}
      </div>
    </PageHeaderTitle>
  );
}

export default PageTitle;
