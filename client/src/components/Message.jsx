import React from "react";
import styles from "../styles/Message.module.css";
function Message({ msg, me }) {
  return (
    <>
      <div
        style={{
          background: me ? "#fff" : "#007bff",
          color: me ? "#000" : "#fff",
        }}
        className={styles.bubble}
      >
        {msg.comment}{" "}
      </div>
      {!me && <div 
        style={{
          color: me ? "#fff" : "#999",
          fontWeight: "bolder",
        }}
      className={styles.author}>anon-{msg.anonId?.slice(0, 10)}</div>}
    </>
  );
}

export default Message;
