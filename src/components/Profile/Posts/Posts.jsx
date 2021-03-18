import React from "react";

import Post from "../Post/Post";
import s from "./Posts.module.css";

const Posts = (props) => {
  let textarea = React.createRef();
  let addPost = () => {
    props.addPost();
  };
  let onChange = () => {
    let text = textarea.current.value;
    props.textChange(text);
  };

  return (
    <div className={s.posts}>
      <div className={s.newPost}>
        <h2 className={s.title}>New Post</h2>
        <textarea
          className={s.text}
          name=""
          ref={textarea}
          cols="30"
          rows="10"
          value={props.data.newText}
          onChange={onChange}
        ></textarea>
        <button onClick={addPost} className={s.btn}>
          Add post
        </button>
      </div>

      <div className="post">
        {props.posts.map((item) => (
          <Post message={item.text} likes={item.likes} key={item.id}></Post>
        ))}
      </div>
    </div>
  );
};
export default Posts;
