import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import jumpRope from "../Images/jumpRope.png";
import manhattan from "../Images/manhattan.png";
import umbrella from "../Images/umbrella.png";
import redbag from "../Images/redbag.png";
import cap from "../Images/cap.png";

const NewArrival = () => {
  return (
    <Container>
      <Head>
        New Arrivals.{" "}
        <span style={{ color: "gray" }}>REY backpacks & bags</span>
      </Head>
      <Holder>
        <Card>
          <MainImage>
            <ImageHold>
              <Image src={jumpRope} />
            </ImageHold>
            <Title>Manhattan Toy WRT</Title>
            <Desc>New design 2023</Desc>
            <PriceHold>
              <Price>$30.00</Price>
              <Ratting>
                <AiFillStar
                  style={{
                    color: "gold",
                    marginRight: "10px",
                  }}
                />
                4.2(87 reviews)
              </Ratting>
            </PriceHold>
          </MainImage>
        </Card>
        <Card>
          <MainImage>
            <ImageHold>
              <Image src={manhattan} />
            </ImageHold>
            <Title>Manhattan Toy WRT</Title>
            <Desc>New design 2023</Desc>
            <PriceHold>
              <Price>$30.00</Price>
              <Ratting>
                <AiFillStar
                  style={{
                    color: "gold",
                    marginRight: "10px",
                  }}
                />
                4.2(87 reviews)
              </Ratting>
            </PriceHold>
          </MainImage>
        </Card>
        <Card>
          <MainImage>
            <ImageHold>
              <Image src={umbrella} />
            </ImageHold>
            <Title>Manhattan Toy WRT</Title>
            <Desc>New design 2023</Desc>
            <PriceHold>
              <Price>$30.00</Price>
              <Ratting>
                <AiFillStar
                  style={{
                    color: "gold",
                    marginRight: "10px",
                  }}
                />
                4.2(87 reviews)
              </Ratting>
            </PriceHold>
          </MainImage>
        </Card>
        <Card>
          <MainImage>
            <ImageHold>
              <Image src={redbag} />
            </ImageHold>
            <Title>Manhattan Toy WRT</Title>
            <Desc>New design 2023</Desc>
            <PriceHold>
              <Price>$30.00</Price>
              <Ratting>
                <AiFillStar
                  style={{
                    color: "gold",
                    marginRight: "10px",
                  }}
                />
                4.2(87 reviews)
              </Ratting>
            </PriceHold>
          </MainImage>
        </Card>
        <Card>
          <MainImage>
            <ImageHold>
              <Image src={cap} />
            </ImageHold>
            <Title>Manhattan Toy WRT</Title>
            <Desc>New design 2023</Desc>
            <PriceHold>
              <Price>$30.00</Price>
              <Ratting>
                <AiFillStar
                  style={{
                    color: "gold",
                    marginRight: "10px",
                  }}
                />
                4.2(87 reviews)
              </Ratting>
            </PriceHold>
          </MainImage>
        </Card>
      </Holder>
    </Container>
  );
};

export default NewArrival;

const Card = styled.div`
  margin: 10px;
`;
const ImageHold = styled.div`
  height: 250px;
  width: 250px;
  background-color: #f7f9fb;
  border-radius: 5px;
`;
const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
  margin-top: 10px;
`;
const Desc = styled.div`
  color: gray;
`;
const PriceHold = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  align-items: center;
`;
const Price = styled.div`
  height: 30px;
  width: 100px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  border: 1px solid green;
  font-weight: 600;
  color: green;
  border-radius: 5px;
`;
const Ratting = styled.div`
  font-size: 13px;
  color: gray;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const MainImage = styled.div``;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 70px;
`;

const Head = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
  overflow: hidden;
  margin-bottom: 50px;
  border-bottom: 1px solid silver;
`;
