import React from "react";
import styled from "styled-components";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { FaChild } from "react-icons/fa";
import { MdSportsBaseball } from "react-icons/md";
import { GiJewelCrown } from "react-icons/gi";

const Categories = () => {
  return (
    <Container>
      <Holder>
        <h1>Start exploring.</h1>
        <ExploreHold>
          <Hold>
            <AiOutlineMan style={{ marginRight: "10px" }} />
            <span>Men</span>
          </Hold>

          <Hold>
            <AiOutlineWoman style={{ marginRight: "10px" }} />
            <span>Women</span>
          </Hold>
          <Hold>
            <FaChild style={{ marginRight: "10px" }} />
            <span>Kids</span>
          </Hold>
          <Hold>
            <MdSportsBaseball style={{ marginRight: "10px" }} />
            <span>Sports</span>
          </Hold>
          <Hold>
            <GiJewelCrown style={{ marginRight: "10px" }} />
            <span>Jewery</span>
          </Hold>
        </ExploreHold>
        <CardHold>
          <Card>
            <First>
              <Circle></Circle>
              <span>12 products</span>
            </First>

            <Second>
              <div>
                <h4>Manufacturar</h4>
                <h2>Shoe</h2>
                <br />
                <br />
                <br />
                <div>See Collection</div>
              </div>
              <SecImage src="https://chisnghiax.com/ciseco/static/media/explore2.1ceb7512bd65219296c27bc4ecc85ff6.svg" />
            </Second>
          </Card>
          <Card>
            <First>
              <Circle></Circle>
              <span>12 products</span>
            </First>

            <Second>
              <div>
                <h4>Manufacturar</h4>
                <h2>Shoe</h2>
                <br />
                <br />
                <br />
                <div>See Collection</div>
              </div>
              <SecImage src="https://chisnghiax.com/ciseco/static/media/explore2.1ceb7512bd65219296c27bc4ecc85ff6.svg" />
            </Second>
          </Card>
          <Card>
            <First>
              <Circle></Circle>
              <span>12 products</span>
            </First>

            <Second>
              <div>
                <h4>Manufacturar</h4>
                <h2>Shoe</h2>
                <br />
                <br />
                <br />
                <div>See Collection</div>
              </div>
              <SecImage src="https://chisnghiax.com/ciseco/static/media/explore2.1ceb7512bd65219296c27bc4ecc85ff6.svg" />
            </Second>
          </Card>
          <Card>
            <First>
              <Circle></Circle>
              <span>12 products</span>
            </First>

            <Second>
              <div>
                <h4>Manufacturar</h4>
                <h2>Shoe</h2>
                <br />
                <br />
                <br />
                <div>See Collection</div>
              </div>
              <SecImage src="https://chisnghiax.com/ciseco/static/media/explore2.1ceb7512bd65219296c27bc4ecc85ff6.svg" />
            </Second>
          </Card>
          <Card>
            <First>
              <Circle></Circle>
              <span>12 products</span>
            </First>

            <Second>
              <div>
                <h4>Manufacturar</h4>
                <h2>Shoe</h2>
                <br />
                <br />
                <br />
                <div>See Collection</div>
              </div>
              <SecImage src="https://chisnghiax.com/ciseco/static/media/explore2.1ceb7512bd65219296c27bc4ecc85ff6.svg" />
            </Second>
          </Card>
          <Card>
            <First>
              <Circle></Circle>
              <span>12 products</span>
            </First>

            <Second>
              <div>
                <h4>Manufacturar</h4>
                <h2>Shoe</h2>
                <br />
                <br />
                <br />
                <div>See Collection</div>
              </div>
              <SecImage src="https://chisnghiax.com/ciseco/static/media/explore2.1ceb7512bd65219296c27bc4ecc85ff6.svg" />
            </Second>
          </Card>
        </CardHold>
      </Holder>
    </Container>
  );
};

export default Categories;

const Card = styled.div`
  height: 270px;
  width: 300px;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  margin: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  h4 {
    color: gray;
  }
`;
const CardHold = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const First = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Second = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SecImage = styled.img`
  width: 200px;
  object-fit: contain;
`;
const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #f3f3f5;
`;

const Hold = styled.div`
  height: 35px;
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #123456;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  /* margin-right: 10px;
	margin-left: 10px; */
`;

const ExploreHold = styled.div`
  width: 700px;
  height: 50px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
`;
const Holder = styled.div`
  background-color: #f7f7f9;
  width: 90%;
  /* height: 500px; */
  border-radius: 10px;
  padding-bottom: 50px;
  display: flex;
  h1 {
    margin-top: 100px;
  }
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;
