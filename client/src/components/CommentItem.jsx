import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import {useSelector} from 'react-redux'
function CommentItem({ comment }) {
  const darkMode = useSelector((state) => state.settings.darkMode);

  const CommentListItem = styled.div`
    height: 30%;
    width: 100%;
    background-color:  ${darkMode ? "#3a3b3c" : "#fff"};
    display: flex;
    align-items: center;
    box-shadow: ${darkMode ? "none" : "0 0 5px #b4ffd9"};
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
    color: ${darkMode ? "#fff" : "#4b4b4b"};
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
    background-color: ${darkMode ? "#18191a" : "#e4fff7"};
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
overflow-x: hidden;

  `;
  const DetailsIconNumber = styled.span`
    color: ${darkMode ? "#00ba7c" : "#22ffb5"};
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
      <DetailsImg src={comment.image} />
      <DetailsContainer>
        <DetailsTitle>{comment.name}</DetailsTitle>
        <DetailsDesc>
          {comment.desc}
        </DetailsDesc>
      </DetailsContainer>
      <DetailsIcon>
        <IconContainer>
          <FontAwesomeIcon icon={faComment} color={
            darkMode ? "#00ba7c" : "#31ffba"
          } fontSize="10px" />
        </IconContainer>
        <DetailsIconNumber>{ comment.comments.length}</DetailsIconNumber>
      </DetailsIcon>
    </CommentListItem>
  );
}

export default CommentItem;
