import React from "react";
import styled from "styled-components";
import shirt from "../Images/shirt (1).png";

const Discover = () => {
  return (
    <Container>
      <Head>Discover more. Good things are waiting for you</Head>
      <Slider>
        <CardWrapper>
          <Details>
            <Text1>Explore new arrivals</Text1>
            <Text2>Shop the latest from top brands</Text2>
            <Button>Show me all</Button>
          </Details>
          <Image src={shirt} />
        </CardWrapper>
      </Slider>
    </Container>
  );
};

export default Discover;

const Text1 = styled.p`
  color: #535e6c;
`;
const Text2 = styled.div`
  color: black;
  font-weight: 500;
  font-size: 20px;
`;
const Button = styled.button`
  outline: 0;
  border: 0;
  padding: 13px 19px;
  border-radius: 50px;
  background-color: white;
  font-weight: 400;
  color: #535e6c;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Slider = styled.div`
  width: 90%;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const CardWrapper = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  background-color: #fefce8;
  cursor: pointer;
  transition: all 360ms;
  :hover {
    background-color: rgb(0, 0, 0, 0.1);
  }
`;
const Details = styled.div`
  flex-direction: column;
  justify-content: space-around;
  display: flex;
  height: 100%;
  align-items: center;
  background-color: red;
`;
const Image = styled.img`
  width: 300px;
  object-fit: cover;
`;

const Head = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 500;
`;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
