import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import BottomBar from "../components/BottomBar";
import logo from "../assets/atlas_universitesi_logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import LikedItem from "../components/LikedItem";
import CommentItem from "../components/CommentItem";
import LSkeletonItem from "../components/LSkeletonItem";
import CSkeletonItem from "../components/CSkeletonItem";

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

 

  const LikedList = styled.div`
    height: 40vh;
    min-height: 259px;
    width: 95%;
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


const LikedListSkeleton = styled.div`
height: 40vh;
min-height: 259px;
width: 95%;
margin-left: 0 auto;
background-color: #242526;
border-radius: 0 20px 20px 0;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1.2rem;
padding: 1.8rem;
padding-left: 0;
border-left: none;
`;

const CommentListSkeleton = styled.div`
height: 40vh;
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



  const [likeds, setLikeds] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  
  useEffect(() => {
    const getLiked = async () => {
      setLoading(true);
      try {
        const res = await fetch("/academicians/mlikes?lim=3");
        const data = await res.json();
        setLikeds(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getLiked();
  }, []);



  useEffect(() => {
    const getCommented = async () => {
      setLoading(true);
      try {
        const res = await fetch("/academicians/mcomments?lim=3");
        const data = await res.json();
        setComments(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCommented();
  }, []);
  console.log(likeds);

  return (
    <Container>
      <Wrapper>
        {loading ? (
            <LikedListSkeleton>
            <LSkeletonItem/>
            <LSkeletonItem/>
            <LSkeletonItem/>
          </LikedListSkeleton>
        ) : (
          
            <LikedList>
              {likeds.map((liked, i) => (
                <LikedItem key={i} like={liked} />
              ))}
            </LikedList>
            
        
        )}
       {
          loading ? (
            <CommentListSkeleton>
            <CSkeletonItem/>
            <CSkeletonItem/>
            <CSkeletonItem/>
          </CommentListSkeleton>
          ) : (
            <CommentList>
              {comments.map((comment, i) => (
                <CommentItem key={i} comment={comment} />
              ))}
            </CommentList>
          
          )
       }
      </Wrapper>

      <BottomBar />
    </Container>
  );
}

export default Home;
