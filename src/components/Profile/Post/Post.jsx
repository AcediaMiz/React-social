import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  let { message, likes } = props;

  return (
    <div className={s.post}>
      <div className={s.user}>
        <img
          className={s.img}
          src="https://www.vhv.rs/dpng/d/178-1785117_discord-png-avatar-anime-transparent-png.png"
          alt=""
        />
        <h2 className={s.name}>Michael</h2>
      </div>

      <p className={s.text}>{message}</p>

      <div className={s.likes}>
        <img
          src="https://raw.githubusercontent.com/AcediaMiz/React-social/afe1ee2fb5cb7ac8e0d766600fbb4d50f863d7b2/src/like.svg"
          alt=""
        />
        {likes}
      </div>
    </div>
  );
};
export default Post;
