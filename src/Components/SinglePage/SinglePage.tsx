import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import pic from "../Assets/1.png";
import { storeDispatch, useAppSelector } from "../Global/Store/Store";
// import { addToCart } from "../Global/ReduxState";
import { getOneUser } from "../../Api/Api";

const SinglePage = () => {
  const { id } = useParams();
  const dispatch = storeDispatch();

  const readCart = useAppSelector((state) => state.myReducer.currentUser);

  // const readSingleItem = readCart.filter((el) => el._id === id);

  // console.log(readSingleItem);

  const getData = useQuery({
    queryKey: ["products", id],
    queryFn: () => {
      return getOneUser(id);
    },
  });

  console.log(getData);

  return (
    <Container>
      <First>
        <img src={pic} />
      </First>
      <Second>
        <h2>{getData?.data?.data?.title}</h2>
        <PriceHold>
          <Price>${getData?.data?.data?.price}</Price>
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
        <Holder>
          <ButtonHold>
            <But>-</But>
            <Count>{readSingleItem[0]?.cartQuantity}</Count>
            <But
              disabled={
                readSingleItem[0]?.cartQuantity === getData?.data?.data.quantity
              }
              onClick={() => {
                dispatch(addToCart(getData?.data?.data));
              }}
              style={{ marginLeft: "20px" }}
            >
              +
            </But>
          </ButtonHold>
          <MainButton
            onClick={() => {
              dispatch(addToCart(getData?.data?.data));
            }}
          >
            Add To Cart
          </MainButton>
        </Holder>

        <DescHold>Description</DescHold>
        <br />
        <span style={{ marginTop: "10px" }}>{getData?.data?.data?.desc}</span>
      </Second>
    </Container>
  );
};

export default SinglePage;

const DescHold = styled.div`
  width: 100%;
  background-color: #fafbfd;
  padding: 10px;
  margin-top: 30px;
  font-weight: 700;
`;

const ButtonHold = styled.div`
  display: flex;
  align-items: center;
`;

const But = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #fafbfd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 25px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  margin-right: 20px;
  cursor: pointer;
  /* margin-left: 20px; */
`;
const Count = styled.div``;
const MainButton = styled.button`
  height: 45px;
  width: 250px;
  background-color: #123456;
  color: white;
  font-size: 17px;
  font-weight: 700;
  border: none;
  outline: none;
  border-radius: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  cursor: pointer;
`;
const Holder = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceHold = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin-top: 10px;
  align-items: center;
`;
const Price = styled.div`
  height: 30px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
  font-weight: 600;
  color: green;
  border-radius: 5px;
  margin-right: 30px;
`;
const Ratting = styled.div`
  font-size: 13px;
  color: gray;
  display: flex;
  align-items: center;
`;

const Second = styled.div`
  width: 500px;
  h2 {
    margin: 0;
  }
  span {
    margin-top: 20px;
  }
`;

const First = styled.div`
  height: 500px;
  width: 550px;
  background-color: #f1f1f1;
  border-radius: 5px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 100px;
`;
