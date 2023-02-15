import React from "react";
import styled from "styled-components";

const NewArrivals = () => {
  return (
    <Container>
      <Head>
        Discover more. <Notice>Good things are waiting for you</Notice>{" "}
      </Head>
    </Container>
  );
};

export default NewArrivals;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Head = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600;
`;

const Notice = styled.div`
  color: #6b7280;
  font-size: 25px;
  font-weight: 600;
  margin-left: 6px;
`;
