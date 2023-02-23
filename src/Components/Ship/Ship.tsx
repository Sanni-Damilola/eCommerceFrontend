import React from "react";
import styled from "styled-components";
import pic from "../Assets/dis.png";

const Ship = () => {
  return (
    <Container>
      <Holder>
        <Card>
          <Image src={pic} />
          <Step>Step1</Step>
          <Title>Filter & Discover</Title>
          <Desc>Smart filtering and suggestions make it easy to find</Desc>
        </Card>
        <Card>
          <Image src={pic} />
          <Step>Step1</Step>
          <Title>Filter & Discover</Title>
          <Desc>Smart filtering and suggestions make it easy to find</Desc>
        </Card>
        <Card>
          <Image src={pic} />
          <Step>Step1</Step>
          <Title>Filter & Discover</Title>
          <Desc>Smart filtering and suggestions make it easy to find</Desc>
        </Card>
        <Card>
          <Image src={pic} />
          <Step>Step1</Step>
          <Title>Filter & Discover</Title>
          <Desc>Smart filtering and suggestions make it easy to find</Desc>
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
