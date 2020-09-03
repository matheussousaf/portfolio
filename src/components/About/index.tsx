import React from "react";

import {
  Container,
  Title,
  Description,
  Cards,
  LightningIcon,
} from "./styles";
import Card from "@components/ui/Card/index";
import Code from "@components/ui/Code";

const About: React.FC = () => {
  return (
    <Container>
      <div>
        <div>
          <Title>Clean code, clean experiences.</Title>
          <Description>
            I focus on building highly functional and maintanable code.
          </Description>
        </div>
        <div>
          <Code />
        </div>
        <Cards>
          <Card>
            <h3>Performance</h3>
            <LightningIcon size={30} />
            <p>Blazing fast apps without leaving the experience.</p>
          </Card>
          <Card>
            <h3>Refactoring</h3>
            <LightningIcon size={30} />
            <p>Testing</p>
          </Card>
          <Card>
            <h3>Performance</h3>
            <LightningIcon size={30} />
            <p>Testing</p>
          </Card>
        </Cards>
      </div>
    </Container>
  );
};

export default About;
