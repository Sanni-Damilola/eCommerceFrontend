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
      </Card>
    </Container>
  );
};

export default Discover;

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
