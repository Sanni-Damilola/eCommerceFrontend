import React from 'react';
import styled from "styled-components";
import { AiOutlineWoman, AiOutlineMan }  from "react-icons/ai";
import { FaChild, FaChessQueen } from "react-icons/fa";
import { GiJewelCrown } from "react-icons/gi";
import { MdSportsBasketball } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs"



const Start = () => {

  return (
      <>
    
    <Startt>

        <Container>

            <Exp>Start Exploring</Exp>

            <Cate>
                <Woman>
                    <Icon>
                        <AiOutlineWoman />
                    </Icon>
                    <Text>Woman</Text>
                </Woman>

                <Woman>
                    <Icon>
                        <AiOutlineWoman />
                    </Icon>
                    <Text>Man</Text>
                </Woman>

                <Woman>
                    <Icon>
                        <AiOutlineWoman />
                    </Icon>
                    <Text>Kids</Text>
                </Woman>

                <Woman>
                    <Icon>
                        <AiOutlineWoman />
                    </Icon>
                    <Text>Sport</Text>
                </Woman>

                <Woman>
                    <Icon>
                        <AiOutlineWoman />
                    </Icon>
                    <Text>Beauty</Text>
                </Woman>

                <Woman>
                    <Icon>
                        <AiOutlineWoman />
                    </Icon>
                    <Text>Jewelry</Text>
                </Woman>

            </Cate>

            <Cards>

                <Card>
                    <Top>
                        <TopImg src="/images/black-bag.png"/>

                        <TopText>173 products</TopText>
                    </Top>

                    <Mid>
                        <Manu>Manufacturer</Manu>

                        <Back>BackPack</Back>
                    </Mid>

                    <Bottom>
                        See Collection <BsArrowRight />
                    </Bottom>
                </Card>

                <Card style={{backgroundImage:"url(/images/explore2.svg)"}}>
                    <Top>
                        <TopImg src="/images/black-shoe.png"/>

                        <TopText>254 products</TopText>
                    </Top>

                    <Mid>
                        <Manu>Manufacturer</Manu>

                        <Back>Shoe</Back>
                    </Mid>

                    <Bottom>
                        See Collection <BsArrowRight />
                    </Bottom>
                </Card>

                <Card style={{backgroundImage:"url(/images/explore3.svg)"}}>
                    <Top>
                        <TopImg src="/images/cloth.png"/>

                        <TopText>173 products</TopText>
                    </Top>

                    <Mid>
                        <Manu>Manufacturer</Manu>

                        <Back>Recycled Blanket</Back>
                    </Mid>

                    <Bottom>
                        See Collection <BsArrowRight />
                    </Bottom>
                </Card>

                <Card style={{backgroundImage:"url(/images/explore5.svg)"}}>
                    <Top>
                        <TopImg src="/images/green-sweat.png"/>

                        <TopText>279 products</TopText>
                    </Top>

                    <Mid>
                        <Manu>Manufacturer</Manu>

                        <Back>Cycling Shirts</Back>
                    </Mid>

                    <Bottom>
                        See Collection <BsArrowRight />
                    </Bottom>
                </Card>

                <Card style={{backgroundImage:"url(/images/explore6.svg)"}}>
                    <Top>
                        <TopImg src="/images/short.png"/>

                        <TopText>320 products</TopText>
                    </Top>

                    <Mid>
                        <Manu>Manufacturer</Manu>

                        <Back>Shorts</Back>
                    </Mid>

                    <Bottom>
                        See Collection <BsArrowRight />
                    </Bottom>
                </Card>

                <Card style={{backgroundImage:"url(/images/explore9.svg)"}}>
                    <Top>
                        <TopImg src="/images/bag3.png"/>

                        <TopText>261 products</TopText>
                    </Top>

                    <Mid>
                        <Manu>Manufacturer</Manu>

                        <Back>Bags</Back>
                    </Mid>

                    <Bottom>
                        See Collection <BsArrowRight />
                    </Bottom>
                </Card>

            </Cards>

        </Container>

    </Startt>
    </>
  )
}

export default Start;

// const Start = styled.div``;

// const Start = styled.div``;

const Back = styled.div`
font-size: 25px;
font-weight: 600;
color: #0f172a;
margin-top: 8px;
`;

const Manu = styled.div`
font-size: 13px;
color: #0f172a;
`;

const TopText = styled.div`
font-size: 12px;
font-weight: 600;
color: #0f172a;
`;

const TopImg = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;
background-color: #f6f7f8;
`;

const Bottom = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
color: #0f172a;
font-size: 15px;
gap: 5px;
font-weight: 600;
width: 90%;
`;

const Mid = styled.div`
width: 90%;
`;

const Top = styled.div`
display: flex;
width: 90%;
justify-content: space-between;
align-items: center;
margin-top: 20px;
`;

const Card = styled.div`
width: 340px;
height: 315px;
background-color: white;
border-radius: 10px;
padding: 5px;
background-image: url(/images/explore1.svg);
background-size: cover;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
cursor: pointer;

:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
`;

const Cards = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
gap: 3rem;
`;

const Exp = styled.div`
font-size: 40px;
font-weight: 600;
color: #0f172a;
margin-bottom: 30px;
`;

const Cate = styled.div`
width: 50%;
height: 35px;
box-shadow: 0 0 3px gray;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
padding: 5px;
border-radius: 20px;
`;

const Text = styled.div``;

const Icon = styled.div`
margin-right: 7px;
`;

const Woman = styled.div`
padding: 6px;
display: flex;
font-weight: 600;
cursor: pointer;

:hover{
    background-color: #0f172a;
    color: white;
    border-radius: 15px;
}
`;

const Container = styled.div`
width: 85%;
height: 90%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: #f6f7f8;
border-radius: 25px; 
padding-top: 50px; 
padding-bottom: 50px; 
`;

const Startt = styled.div`
width: 100%;
// height: 500px;
display: flex;
justify-content: center;
align-items: center;
`;
