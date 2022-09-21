import React from "react";
import styled, { keyframes } from "styled-components";
import BottomBar from "../components/BottomBar";
import logo from "../assets/atlas_universitesi_logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import LikedItem from "../components/LikedItem";
import CommentItem from "../components/CommentItem";

function Home() {
  const Container = styled.div`
    height: 100vh;
    background-color: #18191a;
    overflow-y: scroll;
  
  `;

  const Icon = styled.div`
    width: 10%;
    padding: 10px;
    gap: 10px;
    border-radius: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #b0b3b8;

    background-color: #3a3b3c;
  `;

  const Wrapper = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    gap: 1rem;
  `;

  const slidelike = keyframes`
from {
    transform: translateX(-100%);
}
to {
    transform: translateX(0);
}

`;

  const slidecomment = keyframes`
from {
    transform: translateX(100%);
}
to {
    transform: translateX(0);
}
`;

  const LikedList = styled.div`
    height: 40vh;
    min-height: 259px;
    width: 95%;
    animation: ${slidelike} 1s ease-in-out;
    margin-left: 0 auto;
    background-color: #242526;
    border-radius: 0 20px 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    padding: 1.8rem;
    padding-left: 0;
    border: 1px solid #f91880;
    border-left: none;
  `;

  const CommentList = styled.div`
    animation: ${slidecomment} 1s ease-in-out;
    height: 40vh;
    border: 1px solid #00ba7c;
    border-right: none;
    min-height: 259px;
    width: 95%;
    margin-left: auto;
    border-radius: 20px 0 0 20px;
    background-color: #242526;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    padding: 1.8rem;
    padding-right: 0;
  `;

  return (
    <Container>
      <Wrapper>
        <LikedList>
          <LikedItem />
          <LikedItem />
          <LikedItem />
        </LikedList>
        <CommentList>
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </CommentList>
      </Wrapper>

      <BottomBar />
    </Container>
  );
}

export default Home;
