import React from 'react';
import styled from "styled-components";
import { MdTravelExplore }  from  "react-icons/md"

const hero = () => {
  return (
    <Herro>

      <Container>

        <Left>
          <Season>In this season, find the best</Season>

          <Every>Exclusive collection <br/> for everyone</Every>

          <Button>
              <ButtonText>Explore Now</ButtonText>

              <MdTravelExplore />
          </Button>

        </Left>

        <Right>
          <RightImg src="/images/hero1.png" />
        </Right>

      </Container>
    
    </Herro>
  )
}

export default hero

// const Herro = styled.div``;

const RightImg = styled.img`
width: 600px;
`;

const ButtonText = styled.div``;

const Button = styled.button`
width: 180px;
height: 55px;
border-radius: 35px;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 16px;
font-weight: 600;
background-color: #0f172a;
color: white;
cursor: pointer;
`;

const Every = styled.div`
font-size: 70px;
font-weight: 600;
margin-top: 20px;
margin-bottom: 40px;
color: #0f172a;
line-height: 70px;
`;

const Season = styled.div`
font-size: 25px;
font-weight: 600;
color: #0f172a;
`;

const Left = styled.div``;

const Right = styled.div``;

const Container = styled.div`
width: 85%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Herro = styled.div`
width: 100%;
background-color: #e3ffe6;
height: calc(100vh - 70px);
display: flex;
justify-content: center;
align-items: center;
background-image: url(/images/background-hero.svg);
`;

