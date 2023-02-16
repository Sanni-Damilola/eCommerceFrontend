import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";

const NewArrivals = () => {
  return (
    <Container>
      <Head>
        New Arrivals. <Notice> REY backpacks & bags</Notice>{" "}
      </Head>
      <Wrapper>
        <Card>
          <Hold>
            <Love>
              <AiOutlineHeart />
            </Love>
            <Image />
          </Hold>
          <Title>Ella Leather Tote</Title>
          <Category>Cream pink</Category>
          <Wrap>
            <Amount></Amount>
            <Reviews>
              <Icon></Icon>
              <Text>"4.1 (50 reviews)"</Text>
            </Reviews>
          </Wrap>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default NewArrivals;

const Wrapper = styled.div``;
const Card = styled.div``;
const Hold = styled.div``;
const Love = styled.div``;
const Image = styled.div``;
const Title = styled.div``;
const Category = styled.div``;
const Wrap = styled.div``;
const Amount = styled.div``;
const Reviews = styled.div``;
const Icon = styled.div``;
const Text = styled.div``;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Head = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
`;

const Notice = styled.div`
  color: #6b7280;
  font-size: 25px;
  font-weight: 600;
  margin-left: 6px;
`;
