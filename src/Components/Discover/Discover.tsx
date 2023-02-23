import React from "react";
import styled from "styled-components";
import shirt1 from "../Images/shirt.png"


const Discover = () => {
  return (
    <Container>
      <Head>
        Discover more.{" "}
        <span style={{ color: "gray" }}>Good things are waiting for you</span>
      </Head>
      <Holder>
        <Card bg="#fefce8">
          <First>
            <Title>Explore new Arrivals</Title>
            <Sub>Shop from the latest top brands</Sub>
            <Button>Show me all</Button>
          </First>
          <Second src={shirt1} />
        </Card>
        <Card bg="#FEF2F2">
          <First>
            <Title>Explore new Arrivals</Title>
            <Sub>Shop from the latest top brands</Sub>
            <Button>Show me all</Button>
          </First>
          <Second src={shirt1} />
        </Card>
        <Card bg="#EFF6FF">
          <First>
            <Title>Explore new Arrivals</Title>
            <Sub>Shop from the latest top brands</Sub>
            <Button>Show me all</Button>
          </First>
          <Second src={shirt1} />
        </Card>
      </Holder>
    </Container>
  );
};

export default Discover;
const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Second = styled.img`
  object-fit: contain;
  width: 150px;
`;

//

const Head = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 600;
`;
const Card = styled.div<{ bg: string }>`
  width: 400px;
  height: 170px;
  background-color: ${(props) => props.bg};
  display: flex;
  overflow: hidden;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
`;
const First = styled.div``;
const Title = styled.div`
  margin-bottom: 10px;
`;
const Sub = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Button = styled.button`
  height: 50px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  border: none;
  outline: none;
  margin-top: 30px;
  border-radius: 30px;
  background-color: white;
  color: black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    background-color: transparent;
    color: black;
    transform: scale(0.98);
  }
`;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
  overflow: hidden;
`;
