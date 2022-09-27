import React, { useEffect } from "react";
import styles from "../styles/Single.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faChevronLeft,
  faHeart,
  faComment,
  faSpinner,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/fontawesome-free-regular";
import Message from "../components/Message";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Single() {
  const darkMode = useSelector((state) => state.settings.darkMode);
  const navigate = useNavigate();
  const location = window.location.pathname.split("/")[2];
  const [single, setSingle] = React.useState({});

  const [comment, setComment] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const [likes, setLikes] = React.useState();
  const localLiked = localStorage.getItem("anonId");
  const [liked, setLiked] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLiked(single.likes?.some((item) => item.anonId == localLiked));
  }, [localLiked, single]);

  const lang = useSelector((state) => state.settings.language);

  useEffect(() => {
    setLoading(true);
    const getSingle = async () => {
      try {
        const { data } = await axios.get("/academicians/find/" + location);
        setSingle(data);
        setComments(data.comments);
        setLikes(data.likes);
        setLoading(false);
      } catch (error) {}
    };

    getSingle();
  }, []);

  const handleComment = async () => {
    const dummyComment = {
      comment,
      anonId: localStorage.getItem("anonId"),
    };

    if (comment.length < 7) {
      return toast.warn(lang.warning, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    try {
      await axios.put(`/academicians/mcomment/${location}`, {
        comment,
        anonId: localStorage.getItem("anonId"),
      });
      setComments((prev) => [...prev, dummyComment]);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const scrollRef = React.useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  const handleLike = async () => {
    if (liked) {
      try {
        await axios.put(`/academicians/unlike/${location}`, {
          anonId: localStorage.getItem("anonId"),
        });
        setLikes((prev) =>
          prev.filter((like) => like.anonId !== localStorage.getItem("anonId"))
        );
        setLiked(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.put(`/academicians/like/${location}`, {
          anonId: localStorage.getItem("anonId"),
        });
        setLiked(true);
        setLikes((prev) => [
          ...prev,
          { anonId: localStorage.getItem("anonId") },
        ]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          background: darkMode ? "#18191a" : "#fff",
        }}
        className={styles.top}
      >
        {loading ? (
          <FontAwesomeIcon
            icon={faSpinner}
            spin={true}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              color: darkMode ? "#fff" : "#555",
            }}
          />
        ) : (
          <>
            <div className={styles.header}>
              <div className="">
                <FontAwesomeIcon
                  onClick={() => navigate(-1)}
                  color={darkMode ? "#fff" : "#b0b3b8"}
                  icon={faChevronLeft}
                />
                <span
                  style={{
                    color: darkMode ? "#fff" : "#b0b3b8",
                  }}
                  className={styles.acdName}
                >
                  {single.name}
                </span>
              </div>
              {liked ? (
                <FontAwesomeIcon
                  onClick={handleLike}
                  color="#ff3d98"
                  className={styles.heart}
                  icon={faHeart}
                />
              ) : (
                <FontAwesomeIcon
                  onClick={handleLike}
                  color="#b0b3b8"
                  className={styles.heart}
                  icon={farHeart}
                />
              )}
            </div>
            <div className={styles.main}>
              <img className={styles.img} src={single.image} alt="" />
              <div className={styles.status}>
                <span className={styles.statusItem}>{lang.like}</span>
                <span className={styles.statusItem}>{likes?.length}</span>
              </div>
              <div className={styles.status}>
                <span className={styles.statusItem}>{lang.comment}</span>
                <span className={styles.statusItem}>{comments?.length}</span>
              </div>
            </div>
            <div className={styles.footer}>
              <span className={styles.desc}>{single.desc}</span>
              <span className={styles.info}>{single.info}</span>
            </div>
          </>
        )}
      </div>
      <div
        style={{
          background: darkMode
            ? "#18191a"
            : "linear-gradient(to bottom, #ffdfdf, #dae8ff)",
        }}
        className={styles.center}
        ref={scrollRef}
      >
        {comments.map((msg, i) => (
          <div
            key={i}
            style={{
              alignSelf:
                msg?.anonId === localStorage.getItem("anonId")
                  ? "flex-end"
                  : "flex-start",
            }}
            className={styles.message}
            ref={scrollRef}
          >
            <Message
              msg={msg}
              comments={comments}
              me={msg?.anonId === localStorage.getItem("anonId") ? true : false}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          background: darkMode ? "#18191a" : "#fff",
          borderRadius: "20px 20px 0 0",
        }}
        className={styles.bottom}
      >
        <div className={styles.inputContainer}>
          <input
            style={{
              background: darkMode ? "#18191a" : "#fff",
              color: darkMode ? "#fff" : "#000",
            }}
            className={styles.input}
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={lang.placeholder2}
          />
          <FontAwesomeIcon
            style={{
              color: darkMode ? "#fff" : "#b0b3b8",
              background: darkMode ? "#18191a" : "#fff",
            }}
            onClick={() => handleComment()}
            className={styles.icon}
            icon={faPaperPlane}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Single;
