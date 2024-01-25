import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} />
      </nav>
    </Wrapper>
  );
};

export default Landing;
