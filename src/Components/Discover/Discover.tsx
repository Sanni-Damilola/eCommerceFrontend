import React from "react";
import styled from "styled-components";
import shirt from "../Images/shirt1.png";

const Discover = () => {
  return (
    <Container>
      <Head>Discover more. Good things are waiting for you</Head>
      <Card>
        <First>
          <Title>Explore new Arrivials</Title>
          <Sub>Shop from the latest stop brands</Sub>
          <Button>Show me all</Button>
        </First>
        <Second src={shirt} />
      </Card>
    </Container>
  );
};

export default Discover;

const Card = styled.div`
  height: 200px;
  width: 300px;
  background-color: #fefcc8;
  padding: 20px;
  display: flex;
  margin-left: 25px;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;
const First = styled.div``;
const Head = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
`;
const Second = styled.img`
  object-fit: contain;
  width: 300px;
  height: 300px;
`;
const Title = styled.div``;
const Sub = styled.div``;

const Button = styled.button`
  height: 50px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  border: none;
  outline: none;
  border-radius: 30px;
  background-color: #123456;
  color: white;

  transition: all 360ms;
  cursor: pointer;
  :hover {
    background-color: transparent;
    color: #123456;
    transform: scale(0.9);
  }
`;

const Container = styled.div`
  margin-top: 100px;
`;
