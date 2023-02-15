import React from "react";
import styled from "styled-components";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BsCartDash } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import logo from "../Images/logo.png";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Middle>
          <Span>home</Span>
          <Span>about</Span>
          <Span>service</Span>
          <Span>prouct</Span>
          <Span>search</Span>
          <Span>explore</Span>
        </Middle>
        <Right>
          <IconWrap>
            <FiSearch />
          </IconWrap>
          <AddToCart>
            <BsCartDash />
            <Count>0</Count>
          </AddToCart>
          <Button>get started</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Count = styled.div`
  background-color: #0ea5e9;
  color: white;
  position: absolute;
  top: -5px;
  font-size: 9px;
  right: -3px;
  width: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13px;
  border-radius: 50%;
`;

const Button = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #123456;
  color: white;
  cursor: pointer;
  transform: all 360ms;
  text-transform: capitalize;
  :hover {
    background-color: #123456f4;
  }
`;

const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  object-fit: cover;
  height: 40px;
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Span = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 23px;
  text-transform: capitalize;
  color: rgb(0, 0, 0, 0.8);
  font-weight: 500;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  margin-right: 4px;
  color: rgb(0, 0, 0, 0.3);
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconWrap = styled.div`
  margin-right: 20px;
  color: rgb(0, 0, 0, 0.6);
  cursor: pointer;
`;
const AddToCart = styled.div`
  font-size: 20px;
  margin-right: 40px;
  color: rgb(0, 0, 0, 0.6);
  position: relative;
  cursor: pointer;
`;
