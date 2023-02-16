import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';


const SlideData = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };

  return (
    <Container>
        <Slider{...settings}>

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
                </Box>

        </Slider>
    </Container>
  )
}

export default SlideData;

// const Container = styled.div``;

const Container = styled.div`
width: 100%;
height: 50vh;
overflow: hidden;
position: relative;
`;

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
font-size: 24px;
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
width: 430px;
padding: 10px;
border-radius: 10px;
display: flex;
justify-content: space-between;
margin-right: 20px;

:hover{
    background-color: #6d7179;
    cursor: pointer;
}
`;
