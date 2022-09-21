import React from 'react'
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
function LikedItem() {


    const LikedListItem = styled.div`
    height: 30%;
    width: 100%;
    background-color: #3a3b3c;
    display: flex;
    align-items: center;
    padding: 10px;
    border-left: 0;
    border-radius: 0 20px 20px 0;
    position: relative;
  `;

  const DetailsContainer = styled.div`
    height: 100%;
    width: max-content;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
  `;
  const DetailsIconNumber = styled.span`
    color: #f91880;
    font-size: 0.8rem;
    line-height: 1.2rem;
  `;

    const icon = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
    `;

  const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    animation: ${icon} 1s ease-in-out infinite;
  `


  return (
    <LikedListItem>
            <DetailsImg src="https://yt3.ggpht.com/yti/AJo0G0ndf-o7Q03FoWBOo8UnNLZzVeuHGsRDjWKv0IQqjQ=s108-c-k-c0x00ffffff-no-rj" />
            <DetailsContainer>
              <DetailsTitle>Dr. Öğr. Üyesi Recep DURANAY </DetailsTitle>
              <DetailsDesc>
              Bilgisayar Mühendisliği Bölüm Başkanı

              </DetailsDesc>
            </DetailsContainer>
              <DetailsIcon>
                <IconContainer>
                <FontAwesomeIcon icon={faHeart} color="#f91880" fontSize="10px" />

                </IconContainer>
                <DetailsIconNumber>500</DetailsIconNumber>

              </DetailsIcon>
          </LikedListItem>
  )
}

export default LikedItem