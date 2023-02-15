import React from "react";
import styled from "styled-components";

const NewArrivals = () => {
  return (
    <Container>
      <Head>
        New Arrivals. <Notice> REY backpacks & bags</Notice>{" "}
      </Head>
      <Wrapper>
        <Card>
          <Hold>
            <Love></Love>
            <Image />
          </Hold>
          <Title>
            Ella Leather Tote
          </Title>
          <Category>
            Cream pink
          </Category>
          
        </Card>
      </Wrapper>
    </Container>
  );
};

export default NewArrivals;

const Wrapper = styled.div``;

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
