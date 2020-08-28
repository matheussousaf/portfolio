import React from "react";

import { Container, Title, SubTitle, Description, Cards } from "./styles";
import Card from "@components/ui/Card/index";
import MrBean from "@assets/giphy.gif";

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
            I can build highly functional and maintanable code.
          </Description>
        </div>
        <Cards>
          <Card>
            <p>Testing</p>
          </Card>
          <Card>
            <p>Testing</p>
          </Card>
          <Card>
            <p>Testing</p>
          </Card>
        </Cards>
      </div>
    </Container>
  );
};

export default About;
