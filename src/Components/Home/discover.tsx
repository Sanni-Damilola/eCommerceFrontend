import React from 'react'
import styled from 'styled-components'

const Discover = () => {
  return (
    <Disco>
        <Container>
            <hr style={{border:"1px solid #e4e9f1", width: "100%"}} />

            <Holder>
                <Card>
                    <CardImg src="/images/filter1.png" />

                    <Step>Step 1</Step>

                    <Filter>Filter & Discover</Filter>

                    <Smart>Smart filtering and suggestions make it easy to find</Smart>
                </Card>

                <Card>
                    <CardImg src="/images/filter2.png"/>

                    <Step>Step 2</Step>

                    <Filter>Add to bag</Filter>

                    <Smart>Easily select the correct items and add them to the cart</Smart>
                </Card>

                <Card>
                    <CardImg src="/images/filter3.png"/>

                    <Step>Step 3</Step>

                    <Filter>Fast shipping</Filter>

                    <Smart>The carrier will confirm and ship quickly to you</Smart>
                </Card>

                <Card>
                    <CardImg src="/images/filter4.png"/>

                    <Step>Step 4</Step>

                    <Filter>Enjoy the product</Filter>

                    <Smart>Have fun and enjoy your 5-star quality products</Smart>
                </Card>
            </Holder>

            <hr style={{border:"1px solid #e4e9f1", width: "100%"}} />
        </Container>
    </Disco>
    )
}

export default Discover

// const Disco = styled.div``;

// const Disco = styled.div``;

// const Disco = styled.div``;

const Smart = styled.div`
font-size: 14px;
color: #aaa9a9;
text-align: center;
`;

const Filter = styled.div`
font-size: 14px;
font-weight: 600;
`;

const Step = styled.div`
font-size: 10px;
padding: 4px;
background-color: #8f8ff1;
color: white;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
`;

const CardImg = styled.img`
width: 140px;
// height: 100px;
`;

const Card = styled.div`
width: 230px;
height: 300px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`;

const Holder = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

const Container = styled.div`
width: 85%;
height: 85%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const Disco = styled.div`
width: 100%;
height: 500px;
display: flex;
justify-content: center;
align-items: center;
`;
