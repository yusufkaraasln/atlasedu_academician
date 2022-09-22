import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
function CSkeletonItem() {
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
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1rem;
  `;
    const skeleton = keyframes`
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
    
  `;
   const DetailsImg = styled.div`
     border-radius: 50%;
     height: 2.5rem;
     width: 2.5rem;
     object-fit: cover;
     background-color: #b0b3b863;
     animation: ${skeleton} .5s alternate-reverse infinite;
 
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
     animation: ${skeleton} .5s alternate-reverse infinite;
   `;
   const DetailsDesc = styled.div`
     width: 90%;
     height: 0.4rem;
     background-color: #b0b3b863;
     border-radius: 10px;
     color: #b0b3b8;
     animation: ${skeleton} .5s alternate-reverse infinite;
   `;

 


  return (
    <CommentListItem>
      <DetailsImg src="https://yt3.ggpht.com/yti/AJo0G0ndf-o7Q03FoWBOo8UnNLZzVeuHGsRDjWKv0IQqjQ=s108-c-k-c0x00ffffff-no-rj" />
      <DetailsContainer>
        <DetailsTitle/>
        <DetailsDesc/>
      </DetailsContainer>
      
    </CommentListItem>
  );
}

export default CSkeletonItem;
