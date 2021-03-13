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

      <div className={s.likes}>likes: {likes}</div>
    </div>
  );
};
export default Post;
