import React from "react";
import styled from "styled-components";
import step1 from "../Images/step1.png"
import step2 from "../Images/step2.png"
import step3 from "../Images/step3.png"
import step4 from "../Images/step4.png"

const Ship = () => {
  return (
    <Container>
      <Holder>
        <Card>
          <Image src={step1} />
          <Step>Step1</Step>
          <Title>Filter & Discover</Title>
          <Desc>Smart filtering and suggestions make it easy to find</Desc>
        </Card>
        <Card>
          <Image src={step2} />
          <Step>Step2</Step>
          <Title>Add to bag</Title>
          <Desc>Easily select the correct items and add them to the cart</Desc>
        </Card>
        <Card>
          <Image src={step3} />
          <Step>Step1</Step>
          <Title>Fast shipping</Title>
          <Desc>The carrier will confirm and ship quickly to you</Desc>
        </Card>
        <Card>
          <Image src={step4} />
          <Step>Step4</Step>
          <Title>Enjoy the product</Title>
          <Desc>Have fun and enjoy your 5-star quality products</Desc>
        </Card>
      </Holder>
    </Container>
  );
};

export default Ship;

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  margin: 30px;
`;
const Image = styled.img`
  width: 200px;
`;
const Step = styled.div``;
const Title = styled.h4``;
const Desc = styled.p`
  width: 280px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
