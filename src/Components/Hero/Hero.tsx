import React from "react";
import styled from "styled-components";
import { RiSearch2Line } from "react-icons/ri";
import img from "../Images/hero1.png";

const Hero = () => {
  return (
    <Container>
      <First>
        <Title>hero In this season, find the best 🔥</Title>
        <Heading>
          Exclusive collection <br /> for everyone
        </Heading>
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
  background-color: #e3ffe6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  height: 40px;
  width: 200px;
  display: flex;
  align-items: center;
`;
const Heading = styled.div`
  font-size: 60px;
  font-weight: 900;
`;
const Title = styled.div`
  font-size: 25px;
`;
const First = styled.div`
  margin-right: 10px;
`;
