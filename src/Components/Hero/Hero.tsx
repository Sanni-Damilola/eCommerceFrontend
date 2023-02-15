import React from "react";
import styled from "styled-components";
import { RiSearch2Line } from "react-icons/ri";
import img from "../Images/hero1.png";

const Hero = () => {
  return (
    <Container>
      <First>
        <Title>hero In this season, find the best 🔥</Title>
        <Heading>Exclusive collection for everyone</Heading>
        <Button>
          Explore
          <RiSearch2Line />
        </Button>
      </First>
      <Second src={img} />
    </Container>
  );
};

export default Hero;

const Second = styled.img`
  object-fit: contain;
  width: 650px;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: #e3ffe6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button``;
const Heading = styled.div`
  font-size: 40px;
  font-weight: 900;
`;
const Title = styled.div`
  font-size: 25px;
`;
const First = styled.div``;
