import { connect } from "react-redux";
import {
  addPostCreator,
  changePostTextCreator,
} from "../../../Redux/Redusers/profileReduser";
import Posts from "../Posts/Posts";

let mapState = (state) => {
  return {
    data: state.profilePage,
    posts: [...state.profilePage.posts].reverse(),
  };
};
let mapDispatch = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    textChange: (text) => {
      dispatch(changePostTextCreator(text));
    },
  };
};
const PostsContainer = connect(mapState, mapDispatch)(Posts);
export default PostsContainer;
