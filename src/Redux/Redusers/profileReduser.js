const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
let initialState = {
  posts: [
    {
      id: 1,
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
      necessitatibus natus dignissimos tempore deserunt qui quia, commodi
      aliquam dolor maiores debitis in laborum reiciendis ex deleniti
      consequuntur labore nemo totam.`,
      likes: 33,
    },
    { id: 2, text: "Hello, Bitch", likes: 1 },
    { id: 3, text: "Fuck you", likes: 11 },
    {
      id: 4,
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
    necessitatibus natus dignissimos tempore deserunt qui quia, commodi
    aliquam dolor maiores debitis in laborum reiciendis ex deleniti
    consequuntur labore nemo totam.`,
      likes: 20,
    },
  ],
  newText: "hellou",
};
const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newText: "",
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            text: state.newText,
            likes: 0,
          },
        ],
      };

    case CHANGE_POST_TEXT:
      return {
        ...state,
        newText: action.text,
      };

    default:
      return state;
  }
};
export const addPostCreator = () => ({
  type: ADD_POST,
});
export const changePostTextCreator = (text) => ({
  type: CHANGE_POST_TEXT,
  text,
});
export default profileReduser;
