import React from "react";
import {
  addPostActionCreater,
  changePostTextCreator,
} from "../../../Redux/Redusers/profileReduser";

import Post from "../Post/Post";
import s from "./Posts.module.css";

const Posts = (props) => {
  let posts = [...props.data.posts].reverse();
  let textarea = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreater());
  };
  let onChange = () => {
    let text = textarea.current.value;

    props.dispatch(changePostTextCreator(text));
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
        {posts.map((item) => (
          <Post message={item.text} likes={item.likes} id={item.id}></Post>
        ))}
        }
      </div>
    </div>
  );
};
export default Posts;
