import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Error = () => {
  return (
    <Wrapper>
      <img src="./images/error.svg" alt="error" style={{height:200}} />
      <NavLink to="/">
      <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
    padding: 9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .btn {
        font-size: 1.2rem;
        margin-top: 3rem;
        /* height:10px;
        width:50px; */
    }
`;

export default Error;
