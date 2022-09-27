import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TopTen() {
  const darkMode = useSelector((state) => state.settings.darkMode);
  const location = window.location.pathname.split("/")[2];
  const [loading, setLoading] = React.useState(false);
  const [mosts, setMosts] = React.useState([]);
  const lang = useSelector((state) => state.settings.language);
  useEffect(() => {
    const getMosts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/academicians/${location}?lim=10`);
        setMosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getMosts();
  }, [location]);

  const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: ${darkMode
      ? "#18191a"
      : "linear-gradient(to bottom, #ffdfdf, #dae8ff)"};
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
    background-color: ${darkMode ? "#242526" : "#fff"};
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
    background-color: ${darkMode ? "#fff" : "#ffe2ef"};
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
  const Spinner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <Container>
      <Wrapper>
        <Title>
          {location === "mlikes" ? lang.top10likes : lang.top10comments}
        </Title>

        {loading ? (
          <Spinner>
            <FontAwesomeIcon icon={faSpinner} spin={true} />
          </Spinner>
        ) : (
          mosts.map((most, index) => (
            <TopItem key={index}>
              <Link to={`/sir/${most._id}`}>
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
                    <Number>
                      {location === "mlikes"
                        ? most.likes.length
                        : most.comments.length}
                    </Number>
                  </ActionContainer>
                </Bottom>
              </Link>
            </TopItem>
          ))
        )}
      </Wrapper>
    </Container>
  );
}

export default TopTen;
