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
          <Span>
            men
            <Icon>
              <HiOutlineChevronDown />
            </Icon>
          </Span>
          <Span>women</Span>
          <Span>beauty</Span>
          <Span>sport</Span>
          <Span>
            templates
            <Icon>
              <HiOutlineChevronDown />
            </Icon>
          </Span>
          <Span>
            explore
            <Icon>
              <HiOutlineChevronDown />
            </Icon>
          </Span>
        </Middle>
        <Right>
          <IconWrap>
            <FiSearch />
          </IconWrap>
          <IconWrap>
            <RxPerson />
          </IconWrap>
          <AddToCart>
            <BsCartDash />
          </AddToCart>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;

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
  margin-right: 20px;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  margin-left: 6px;
`;
const Right = styled.div``;
const IconWrap = styled.div``;
const AddToCart = styled.div``;
