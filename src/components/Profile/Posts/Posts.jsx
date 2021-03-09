import Post from "../Post/Post";
import s from "./Posts.module.css";

const Posts = () => {
  let post = [
    { id: 1, text: "Hi", likes: 11 },
    { id: 1, text: "Hello, Bitch", likes: 11 },
    { id: 1, text: "Fuck you", likes: 11 },
    { id: 1, text: "No fuck you!", likes: 11 },
  ];
  return (
    <div className="posts">
      <div className="NewPost">
        <h2 className="title">New Post</h2>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>

      <div className="post">
        {post.map((item) => (
          <Post message={item.text} likes={item.likes} id={item.id}></Post>
        ))}
      </div>
    </div>
  );
};
export default Posts;
