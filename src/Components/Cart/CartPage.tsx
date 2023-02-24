import React from "react";
import styled from "styled-components";
import { addToCart, clearAllCart, removeFromCart } from "../Global/ReduxState";
import { UseAppDispach, useAppSelector } from "../Global/Store";
import shirt from "../Images/shirt.png";

const CartPage = () => {
  const readCart = useAppSelector((state) => state.myReducer.cart);
  const dispatch = UseAppDispach();

  return (
    <Container>
      <Holder>
        <h2>Shopping Cart</h2>
        <p>Homepage/Clothing Categories/Shopping Cart</p>

        <br />
        <br />
        <MainHold>
          <div>
            {readCart?.map((props) => (
              <First>
                <ImageHolder>
                  <Image src={shirt} />
                  <TextHold>
                    <span>shirt</span>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Price>In Stock</Price>
                      <Remove
                        onClick={() => {
                          dispatch(clearAllCart);
                        }}
                      >
                        Remove
                      </Remove>
                    </div>
                  </TextHold>
                </ImageHolder>
                <ButtonHold>
                  <But
                    onClick={() => {
                      dispatch(removeFromCart(props));
                    }}
                  >
                    -
                  </But>
                  <Count>{props.cartQuantity}</Count>
                  <But
                    onClick={() => {
                      dispatch(addToCart(props));
                    }}
                    style={{ marginLeft: "20px" }}
                  >
                    +
                  </But>
                </ButtonHold>
                <Price>$30.00</Price>
              </First>
            ))}
          </div>

          <Second>
            <h4 style={{ color: "gray" }}>Order Summary</h4>
            <SubHold>
              <span>Subtotal</span>
              <Pricing>$249.00</Pricing>
            </SubHold>
            <SubHold>
              <span>Subtotal</span>
              <Pricing>$249.00</Pricing>
            </SubHold>
            <SubHold>
              <span>Subtotal</span>
              <Pricing>$249.00</Pricing>
            </SubHold>
            <br />
            <br />
            <MainButton>Checkout</MainButton>
          </Second>
        </MainHold>
      </Holder>
    </Container>
  );
};

export default CartPage;

const Remove = styled.div`
  cursor: pointer;
  background-color: red;
  padding: 7px 11px;
  color: white;
  border-radius: 5px;
`;

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

const SubHold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid silver;
  font-weight: bold;
  margin-bottom: 15px;
`;
const Pricing = styled.div``;

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

const ButtonHold = styled.div`
  display: flex;
  /* align-items: center; */
`;

const But = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #fafbfd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  margin-right: 20px;
  cursor: pointer;
  /* margin-left: 20px; */
`;
const Count = styled.div`
  margin-top: 10px;
`;

const First = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  border-right: 1px solid silver;
  margin-right: 20px;
  margin-bottom: 20px;
  /* align-items: center; */
`;
const Second = styled.div`
  flex: 1;
`;
const MainHold = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  background-color: #f1f1f1;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 5px;
`;
const ImageHolder = styled.div`
  display: flex;
`;
const TextHold = styled.div``;

const Holder = styled.div`
  width: 80%;
`;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 35px;
  }
`;
