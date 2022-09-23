import React from "react";
import styles from "../styles/Single.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faHeart,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/fontawesome-free-regular";
import Message from "../components/Message";
function Single() {
  const [like, setLike] = React.useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.header}>
          <div className="">
            <FontAwesomeIcon color="#fff" icon={faChevronLeft} />
            <span className={styles.acdName}>Dr. Öğr. Üyesi Recep DURANAY</span>
          </div>
          {like ? (
            <FontAwesomeIcon
              onClick={() => setLike(!like)}
              color="#ff3d98"
              className={styles.heart}
              icon={faHeart}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setLike(!like)}
              color="#b0b3b8"
              className={styles.heart}
              icon={farHeart}
            />
          )}
        </div>
        <div className={styles.main}>
          <img
            className={styles.img}
            src="https://mdbf.atlas.edu.tr/uploads/akademikkadro/dr-ogr-uyesi-recep-duranay-60114.jpg"
            alt=""
          />
          <div className={styles.status}>
            <span className={styles.statusItem}>Beğeni</span>
            <span className={styles.statusItem}>234</span>
          </div>
          <div className={styles.status}>
            <span className={styles.statusItem}>Yorum</span>
            <span className={styles.statusItem}>243</span>
          </div>
        </div>
        <div className={styles.footer}>
          <span className={styles.desc}>
            Bilgisayar Mühendisliği Bölüm Başkanı
          </span>
          <span className={styles.info}>
            Bilgisayar Mühendisliği Öğretim Üyesi
          </span>
        </div>
      </div>
      <div className={styles.center}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className={styles.bottom}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Yorumunuzu yazın"
          />
          <FontAwesomeIcon className={styles.icon} icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
}

export default Single;
