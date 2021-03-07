import Post from "./Post/Post";
import s from "./Posts.module.css";

const Posts = () => {
  return (
    <div className="posts">
      <div className="NewPost">
        <h2 className="title">New Post</h2>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>

      <div className="post">
        <Post message="Hi!" likes="14"></Post>
        <Post message="Hello, Bitch" likes="30"></Post>
      </div>
    </div>
  );
};
export default Posts;
