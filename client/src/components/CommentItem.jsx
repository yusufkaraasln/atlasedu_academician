import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
function CommentItem() {
  const CommentListItem = styled.div`
    height: 30%;
    width: 100%;
    background-color: #3a3b3c;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 20px 0 0 20px;
    position: relative;
    border-right: 0;
  `;

  const DetailsContainer = styled.div`
    height: 100%;
    width: max-content;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
  `;
  const DetailsImg = styled.img`
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    object-fit: cover;
  `;
  const DetailsTitle = styled.span`
    font-size: 0.8rem;
    font-weight: 500;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
  const DetailsDesc = styled.span`
    font-size: 0.8rem;
    font-weight: 400;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #b0b3b8;
  `;

  const DetailsIcon = styled.div`
    position: absolute;
    right: 0;
    bottom: -10px;
    width: 20%;
    background-color: #18191a;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
overflow-x: hidden;

  `;
  const DetailsIconNumber = styled.span`
    color: #00ba7c;
    font-size: 0.8rem;
    line-height: 1.2rem;
  `;

const icon = keyframes`
 0% {
    transform: translateX(-1px)
  }
  10% {
    transform: translateX(1px)
  }
  20% {
    transform: translateX(-1px)
  }
  30% {
    transform: translateX(1px)
  }
  40% {
    transform: translateX(-1px)
  }
  50% {
    transform:  translateX(1px)
  }
  60% {
    transform: translateX(-1px)
  }
  70% {
    transform: translateX(1px)
  }
  80% {
    transform: translateX(-1px)
  }
  100% {
    transform:  translateX(-1px)
  }

`;

const IconContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;

animation: ${icon} 1s ease-in-out infinite;
`


  return (
    <CommentListItem>
      <DetailsImg src="https://yt3.ggpht.com/yti/AJo0G0ndf-o7Q03FoWBOo8UnNLZzVeuHGsRDjWKv0IQqjQ=s108-c-k-c0x00ffffff-no-rj" />
      <DetailsContainer>
        <DetailsTitle>Dr. Öğr. Üyesi Recep DURANAYasdfasdfasdf</DetailsTitle>
        <DetailsDesc>
          Bilgisayar Mühendisliği Bölüm Başkanıasdfasdfasdf
        </DetailsDesc>
      </DetailsContainer>
      <DetailsIcon>
        <IconContainer>
          <FontAwesomeIcon icon={faComment} color="#00ba7c" fontSize="10px" />
        </IconContainer>
        <DetailsIconNumber>500</DetailsIconNumber>
      </DetailsIcon>
    </CommentListItem>
  );
}

export default CommentItem;
