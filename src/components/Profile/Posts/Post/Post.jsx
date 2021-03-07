import s from "./Post.module.css";

const Post = (props) => {
  let { message, likes } = props;
  return (
    <div className="item">
      <img
        className={s.img}
        src="https://www.vhv.rs/dpng/d/178-1785117_discord-png-avatar-anime-transparent-png.png"
        alt=""
      />
      {message}
      <div className="likes">likes: {likes}</div>
    </div>
  );
};
export default Post;
