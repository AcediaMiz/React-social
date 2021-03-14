const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
let initialState = {
  posts: [
    { id: 1, text: "Hi", likes: 33 },
    { id: 2, text: "Hello, Bitch", likes: 1 },
    { id: 3, text: "Fuck you", likes: 11 },
    { id: 4, text: "No fuck you!", likes: 20 },
  ],
  newText: "hellou",
};
const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        text: state.newText,
        likes: 0,
      };
      state.posts.push(newPost);
      state.newText = "";
      break;
    case CHANGE_POST_TEXT:
      state.newText = action.text;
      break;
  }
  return state;
};
export const addPostActionCreater = () => ({
  type: ADD_POST,
});
export const changePostTextCreator = (text) => ({
  type: CHANGE_POST_TEXT,
  text,
});
export default profileReduser;
