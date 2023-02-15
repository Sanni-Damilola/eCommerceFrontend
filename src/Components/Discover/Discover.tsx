import React from "react";
import styled from "styled-components";

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
        <Second />
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
  overflow: hidden;
`;
const First = styled.div``;
const Head = styled.div``;
const Second = styled.img`
  object-fit: contain;
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
