import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const Error = () => {
  return (
    <Wrapper>
      <img src="./images/error.svg" alt="error" />
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
        font-size: 1.8rem;
        margin-top: 3rem;
    }
`;

export default Error;
