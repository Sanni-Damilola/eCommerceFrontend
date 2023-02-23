import React from "react";
import styled from "styled-components";
import { RiSearch2Line } from "react-icons/ri";
import pic from "../Assets/hero1.png";
const Hero = () => {
  return (
    <Container>
      <First>
        <Title>In this season, find the best 🔥</Title>
        <Heading>
          Exclusive collection
          <br /> for everyone
        </Heading>
        <Button>
          Explore now <RiSearch2Line />
        </Button>
      </First>
      <Second src={pic} />
    </Container>
  );
};

export default Hero;

const Button = styled.button`
  height: 50px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  border: none;
  outline: none;
  border-radius: 30px;
  background-color: #123456;
  color: white;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    background-color: transparent;
    color: black;
    transform: scale(0.98);
  }
`;

const Title = styled.div`
  font-size: 25px;
`;
const Second = styled.img`
  object-fit: contain;
  width: 650px;
`;
const Heading = styled.div`
  font-size: 60px;
  font-weight: 900;
  margin-bottom: 10px;
`;
const First = styled.div`
  margin-right: 10px;
`;

const Container = styled.div`
  /* height: 500px; */
  width: 100%;
  background-color: #e3ffe6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;
