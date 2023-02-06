import React from 'react';
import headerImg from "../images/Vector-Blue-Background.png";

import styled from 'styled-components';

const PageHeaderTitle = styled.header`
  h1 {
    font-size: 5rem;
    font-weight: 600;
    color:${({ theme }) => theme.colors.white};
  }

  .text-left {
    margin-left: 15rem;
  }
`;

function PageTitle({title}) {
  return (
    <PageHeaderTitle>
    <div
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div style={{ minHeight: "150px" }}>
          <div className="text-left justify-content-center align-self-center">
            <h1 className="pt-5 pb-3">{title}</h1>
            {/* <h5>subTitle</h5> */}
          </div>
        </div>
      </div>
      </PageHeaderTitle>
  )
}

export default PageTitle;
