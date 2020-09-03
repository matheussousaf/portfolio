import React from "react";

import { Container, Title, SubTitle, Description, Cards } from "./styles";
import Card from "@components/ui/Card/index";
import MrBean from "@assets/giphy.gif";
// import {  } from 'styled-icons';

const About: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={MrBean} />
      </div>
      <div>
        <div>
          <Title>Clean code, clean experiences.</Title>
          <SubTitle>Quality for your product, your customers happy.</SubTitle>
          <Description>
            I focus on building highly functional and maintanable code.
          </Description>
        </div>
        <Cards>
          <Card>
            <h3>Performance</h3>
            <i></i>
            <p>Blazing fast apps without leaving the experience.</p>
          </Card>
          <Card>
            <h3></h3>
            <p>Testing</p>
          </Card>
          <Card>
            <h3>Code Quality</h3>
            <p>Testing</p>
          </Card>
        </Cards>
      </div>
    </Container>
  );
};

export default About;
