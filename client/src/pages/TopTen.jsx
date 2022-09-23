import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function TopTen() {
  const location = window.location.pathname.split("/")[2];
  const [mosts, setMosts] = React.useState([]);
  useEffect(() => {
    const getMosts = async () => {
      try {
        const { data } = await axios.get(`/academicians/${location}?lim=10`);
        setMosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(mosts);

    getMosts();
  }, [location]);

  const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #18191a;
    overflow-y: scroll;
  `;
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 1rem;
  `;
  const Title = styled.span`
    color: #fff;
    margin: 1rem 0;
  `;
  const TopItem = styled.div`
    background-color: #242526;
    border-radius: 20px;
    margin-bottom: 1rem;
    width: 100%;
    padding: 0.5rem;
    position: relative;
  `;
  const Img = styled.img`
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin-right: 1rem;
  `;
  const Main = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 1rem;
  `;
  const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  `;
  const Name = styled.span`
    color: #b0b3b8;
  `;
  const Desc = styled.span`
    color: #b0b3b8;
    font-size: 0.8rem;
  `;

  const Bottom = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    padding: 0.5rem;
    bottom: 0;
    right: 0;
    background-color: #fff;
    border-radius: 20px 0 20px 0;
  `;
  const Rank = styled.span`
    background: #fff;
    font-size: 10px;
    padding: 5px;
    border-radius: 10px;
    font-weight: bold;
    color: #000;
  `;
  const ActionContainer = styled.div``;
  const Number = styled.span`
    color: ${location === "mlikes" ? "#f91880" : "#00ba7c"};
    margin-left: 5px;
  `;

  return (
    <Container>
      <Wrapper>
        <Title>En Çok Beğenilen 10 Akademisyen</Title>
        {
            mosts.map((most, index) => (
                <TopItem key={index}>
          <Main>
            <Img src={most.image} />
            <Details>
              <Name>{most.name}</Name>
              <Desc>{most.desc}</Desc>
            </Details>
          </Main>

          <Bottom>
            <ActionContainer>
              <FontAwesomeIcon
                color={location === "mlikes" ? "#f91880" : "#00ba7c"}
                icon={location === "mlikes" ? faHeart : faComment}
              />
              <Number>{
                    location === "mlikes" ? most.likes.length : most.comments.length
                }</Number>
            </ActionContainer>
          </Bottom>
        </TopItem>
            ))
        }
      </Wrapper>
    </Container>
  );
}

export default TopTen;
