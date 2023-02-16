import { write } from "fs";
import React from "react";
import styled from "styled-components";
import green from "../Assets/green.png";
import { AiFillStar } from "react-icons/ai";

const Arrivals = () => {
  return (
    <Container>
      <Wrapper>
        <Up>
          New Arrivals.
          <span style={{ color: "rgb(107,114,128)", marginLeft: "10px" }}>
            REY backpacks & bags
          </span>
        </Up>
        <Down>
          <Box>
            <img src="/images/sweat2.png" />
            <Write>
              <Txt>
                Leather Gloves
                <span style={{ color: "lightgray", marginTop: "10px" }}>
                  Perfect mint green
                </span>
              </Txt>
              <Below>
                <Price>$42.00</Price>
                <Ratings>
                  <AiFillStar style={{ color: "#fbbf24" }} />
                  4.2 (36 reviews)
                </Ratings>
              </Below>
            </Write>
          </Box>
          <Box>
            <img src="/images/baseball.png" />
            <Write>
              <Txt>
                Manhattan Toy WRT
                <span style={{ color: "lightgray", marginTop: "10px" }}>
                  New design 2023
                </span>
              </Txt>
              <Below>
                <Price>$42.00</Price>
                <Ratings>
                  <AiFillStar style={{ color: "#fbbf24" }} />
                  4.2 (36 reviews)
                </Ratings>
              </Below>
            </Write>
          </Box>
          <Box>
            <img src="/images/umbrella.png" />
            <Write>
              <Txt>
                Ella Umbrella
                <span style={{ color: "lightgray", marginTop: "10px" }}>
                  Perfect black
                </span>
              </Txt>
              <Below>
                <Price>$42.00</Price>
                <Ratings>
                  <AiFillStar style={{ color: "#fbbf24" }} />
                  4.2 (36 reviews)
                </Ratings>
              </Below>
            </Write>
          </Box>
          <Box>
            <img src="/images/skipping.png" />
            <Write>
              <Txt>
                Jump Rope Kids
                <span style={{ color: "lightgray", marginTop: "10px" }}>
                  Classic green
                </span>
              </Txt>
              <Below>
                <Price>$42.00</Price>
                <Ratings>
                  <AiFillStar style={{ color: "#fbbf24" }} />
                  4.2 (36 reviews)
                </Ratings>
              </Below>
            </Write>
          </Box>
        </Down>
      </Wrapper>
    </Container>
  );
};

export default Arrivals;

const Container = styled.div`
  width: 100%;
  height: 600px;

  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 550px;
  /* background-color: red; */
  margin-left: 5vw;
  margin-right: 5vw;
`;

const Up = styled.div`
  font-weight: 20px;
  margin-bottom: 30px;
  color: rgb(17, 24, 39);
  font-size: 35px;
  font-weight: bold;
`;

const Down = styled.div`
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background-color: red; */
`;

const Box = styled.div`
  width: 290px;
  height: 450px;

  /* background-color: blue; */
  border-radius: 15px;

  img {
    object-fit: cover;
    height: 300px;
    width: 100%;
    background-color: #f8fafc;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    /* background-color: red; */
  }
`;

const Write = styled.div`
  /* background-color: aliceblue; */
  height: 150px;
`;

const Txt = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: bold;
  margin-left: 20px;
  color: rgb(17, 24, 39);
  margin-top: 25px;
`;
const Below = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.div`
  border: 2px solid green;
  height: 30px;
  width: 80px;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  color: rgb(17, 24, 39);
`;
const Ratings = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: lightgray;
`;
