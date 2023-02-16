import React from 'react';
import styled from "styled-components";

const Carousel = () => {
  return (
    <Carouse>
        <Holder>
            <More>Discover more. <span>Good things are waiting for you.</span></More>

            <Boxes>
                <Box style={{backgroundColor:"#fefce8"}}> 
                    <Left>
                        <Up>
                        <Exp>Explore new arrivals</Exp>

                        <Shop>Shop the latest <br />from top brands</Shop>
                        </Up>

                        <Button>Show me all</Button>
                    </Left>

                    <Right>
                        <RightImg src="/images/yellow-shirt.png" />
                    </Right>
                </Box>

                <Box style={{backgroundColor:"#fef2f2"}}> 
                    <Left>
                        <Up>
                        <Exp>Digital gift cards</Exp>

                        <Shop>Give the gift <br />of choice</Shop>
                        </Up>

                        <Button>Show me all</Button>
                    </Left>

                    <Right>
                        <RightImg src="/images/ball.png" />
                    </Right>
                </Box>

                <Box style={{backgroundColor:"#eff6ff"}}> 
                    <Left>
                        <Up>
                        <Exp>Sale collection</Exp>

                        <Shop>Up to <br />80% of retail</Shop>
                        </Up>

                        <Button>Show me all</Button>
                    </Left>

                    <Right>
                        <RightImg src="/images/dog.png" />
                    </Right>
                </Box>

                {/* <Box style={{backgroundColor:"#fefce8"}}> 
                    <Left>
                        <Up>
                        <Exp>Explore new arrivals</Exp>

                        <Shop>Shop the latest <br />from top brands</Shop>
                        </Up>

                        <Button>Show me all</Button>
                    </Left>

                    <Right>
                        <RightImg src="/images/yellow-shirt.png" />
                    </Right>
                </Box>

                <Box style={{backgroundColor:"#fefce8"}}> 
                    <Left>
                        <Up>
                        <Exp>Explore new arrivals</Exp>

                        <Shop>Shop the latest <br />from top brands</Shop>
                        </Up>

                        <Button>Show me all</Button>
                    </Left>

                    <Right>
                        <RightImg src="/images/yellow-shirt.png" />
                    </Right>
                </Box>

                <Box style={{backgroundColor:"#fefce8"}}> 
                    <Left>
                        <Up>
                        <Exp>Explore new arrivals</Exp>

                        <Shop>Shop the latest <br />from top brands</Shop>
                        </Up>

                        <Button>Show me all</Button>
                    </Left>

                    <Right>
                        <RightImg src="/images/yellow-shirt.png" />
                    </Right>
                </Box> */}

            </Boxes>
        </Holder>
    </Carouse>
  )
}

export default Carousel

// const Carouse = styled.div``;

// const Carouse = styled.div``;

const Up = styled.div``;

const RightImg = styled.img`
width: 85%;
`;

const Right = styled.div`
height: 100%;
width: 220px;
display: flex;
justify-content: center;
align-items: center;
`;

const Button = styled.button`
width: 100px;
height: 40px;
border-radius: 30px;
margin-bottom: 12px;
border: none;
color: #373d4a;
cursor: pointer;

:hover{
    background-color: #3b3f47;
    color: white;
}
`;

const Shop = styled.div`
font-size: 22px;
font-weight: 600;
color: #373d4a;
`;

const Exp = styled.div`
font-size: 13px;
color: #373d4a;
margin-top: 10px;
margin-bottom: 6px;
`;

const Left = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Box = styled.div`
height: 100%;
width: 460px;
padding: 10px;
border-radius: 10px;
display: flex;
justify-content: space-between;
/* margin-right: 10px;
margin-bottom: 10px; */

:hover{
    background-color: #6d7179;
    cursor: pointer;
}
`;

const Boxes = styled.div`
height: 220px;
display: flex;
gap: 2rem;
`;

const More = styled.div`
font-size: 40px;
font-weight: 600;

span{
    color: #6b7280;
}
`;

const Holder = styled.div`
width: 85%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
/* align-items: center; */
`;

const Carouse = styled.div`
width: 100%;
height: 450px;
display: flex;
justify-content: center;
align-items: center;
`;
