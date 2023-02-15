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
            <Text1>Shop the latest from top brands</Text1>
            <Button>Show me all</Button>
          </Details>
          <Image />
        </CardWrapper>
      </Slider>
    </Container>
  );
};

export default Discover;

const Text1 = styled.p`

`;
const Text2 = styled.span``;
const Button = styled.button``;

const Slider = styled.div``;
const CardWrapper = styled.div``;
const Details = styled.div``;
const Image = styled.img``;

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
`;
