import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector } from "react-redux";

function LSkeletonItem() {
  const darkMode = useSelector((state) => state.settings.darkMode);
  const LikedListItem = styled.div`
    height: 30%;
    width: 100%;
    background-color: ${darkMode ? "#3a3b3c" : "#fff"};

    display: flex;
    align-items: center;
    padding: 10px;
    border-left: 0;
    border-radius: 0 20px 20px 0;
    position: relative;
  `;

  const DetailsContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 0.5rem;
    margin-left: 1rem;
  `;
   const skeleton = keyframes`
  0% {
        opacity: ${darkMode ? "0.1" : "0.3"};
    }
    50% {

        opacity: ${darkMode ? "0.25" : "0.6"};
    }
    100% {
        opacity: ${darkMode ? "0.5" : "1"};
    }
   
 `;
  const DetailsImg = styled.div`
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    object-fit: cover;
    background-color: #b0b3b863;
    animation: ${skeleton} .8s alternate-reverse infinite;

  `;
  const DetailsTitle = styled.div`
    width: 80%;
    height: 0.8rem;
    border-radius: 10px;
    background-color: #b0b3b863;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    animation: ${skeleton} .8s alternate-reverse infinite;
  `;
  const DetailsDesc = styled.div`
    width: 90%;
    height: 0.4rem;
    background-color: #b0b3b863;
    border-radius: 10px;
    color: #b0b3b8;
    animation: ${skeleton} .8s alternate-reverse infinite;
  `;

 

  return (
    <LikedListItem>
      <DetailsImg src="https://yt3.ggpht.com/yti/AJo0G0ndf-o7Q03FoWBOo8UnNLZzVeuHGsRDjWKv0IQqjQ=s108-c-k-c0x00ffffff-no-rj" />
      <DetailsContainer>
        <DetailsTitle> </DetailsTitle>
        <DetailsDesc />
      </DetailsContainer>
    </LikedListItem>
  );
}

export default LSkeletonItem;
