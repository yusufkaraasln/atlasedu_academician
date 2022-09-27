import React, { useEffect } from "react";
import styled from "styled-components";
import BottomBar from "../components/BottomBar";

import LikedItem from "../components/LikedItem";
import CommentItem from "../components/CommentItem";
import LSkeletonItem from "../components/LSkeletonItem";
import CSkeletonItem from "../components/CSkeletonItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Home() {
  const darkMode = useSelector((state) => state.settings.darkMode);
  const lang = useSelector((state) => state.settings.language);
  const Container = styled.div`
    height: 100vh;
    background: ${darkMode
      ? "#18191a"
      : "linear-gradient(to bottom, #ffdfdf, #dae8ff)"};
    overflow-y: scroll;
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
    background-color: ${darkMode ? "#242526" : "#fff"};
    border-radius: 0 20px 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    padding: 1.8rem;
    padding-left: 0;
    border: 1px solid ${darkMode ? "#f91880" : "none"};
    position: relative;
    border-left: none;
  `;

  const CommentList = styled.div`
    height: 40vh;
    border: 1px solid ${darkMode ? "#00ba7c" : "none"};

    border-right: none;
    min-height: 259px;
    width: 95%;
    margin-left: auto;
    border-radius: 20px 0 0 20px;
    background-color: ${darkMode ? "#242526" : "#fff"};

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    padding: 1.8rem;
    padding-right: 0;
    position: relative;
  `;

  const LikedListSkeleton = styled.div`
    height: 40vh;
    min-height: 259px;
    width: 95%;
    margin-left: 0 auto;
    background-color: ${darkMode ? "#242526" : "#fff"};
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
    background-color: ${darkMode ? "#242526" : "#fff"};

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
    padding: 1.8rem;
    padding-right: 0;
  `;

  const ViewAll = styled.div`
    position: absolute;
    bottom: 0;
    background-color: ${darkMode ? "#f91880" : "#f91880"};
    border-top-right-radius: 20px;
  `;
  const ViewAllC = styled.div`
    position: absolute;
    background-color: ${darkMode ? "#00ba7c" : "#22ffb5"};
    border-bottom-left-radius: 20px;
    right: 0;
    top: 0;
  `;
  const Text = styled.span`
    color: ${darkMode ? "#fff" : "#fff"};
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
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
      }
    };
    getCommented();
  }, []);
 

  return (
    <Container>
      <Wrapper>
        {loading ? (
          <LikedListSkeleton>
            <LSkeletonItem />
            <LSkeletonItem />
            <LSkeletonItem />
          </LikedListSkeleton>
        ) : (
          <LikedList>
            {likeds.map((liked, i) => (
              <div key={i} className="">
                  <Link  to={`/sir/${liked._id}`}>

                <LikedItem  like={liked} />
              </Link>
                </div>
            ))}

            <Link to="/top/mlikes">
              <ViewAll>
                <Text>{lang.all}</Text>
              </ViewAll>
            </Link>
          </LikedList>
        )}
        {loading ? (
          <CommentListSkeleton>
            <CSkeletonItem />
            <CSkeletonItem />
            <CSkeletonItem />
          </CommentListSkeleton>
        ) : (
          <CommentList>
            {comments.map((comment, i) => (
              <div key={i} className="">
                  <Link  to={`/sir/${comment._id}`}>
                <CommentItem  comment={comment} />
                  </Link>
              </div>
            ))}

            <Link to="/top/mcomments">
              <ViewAllC>
                <Text>{lang.all}</Text>
              </ViewAllC>
            </Link>
          </CommentList>
        )}
      </Wrapper>

      <BottomBar />
    </Container>
  );
}

export default Home;
