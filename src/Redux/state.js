const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Lena" },
        { id: 2, name: "Dima" },
        { id: 3, name: "Lesha" },
        { id: 4, name: "Liza" },
        { id: 4, name: "Michael" },
        { id: 5, name: "Muhammad" },
      ],
      messages: [
        {
          id: 1,
          text: "♂Oh, Billy♂️",
          isUser: false,
          img:
            "https://ranbus.fra1.cdn.digitaloceanspaces.com/ranbus/media/images/2020/05/23/1590240603_iavvKTvmzW.jpg",
        },
        {
          id: 2,
          text: "♂️Welcome to the club, buddy♂️",
          isUser: true,
          img: "https://i.redd.it/37qu0i34fsl01.jpg",
        },
        {
          id: 3,
          text: "♂️Fuck You!♂️",
          isUser: false,
          img:
            "https://ranbus.fra1.cdn.digitaloceanspaces.com/ranbus/media/images/2020/05/23/1590240603_iavvKTvmzW.jpg",
        },
        {
          id: 4,
          text: "Fingers♂️",
          isUser: true,
          img: "https://i.redd.it/37qu0i34fsl01.jpg",
        },
        {
          id: 5,
          text: "♂️ Dungeon master♂️ ",
          isUser: false,
          img:
            "https://ranbus.fra1.cdn.digitaloceanspaces.com/ranbus/media/images/2020/05/23/1590240603_iavvKTvmzW.jpg",
        },
        {
          id: 6,
          text: "♂️Boss of the gym♂️",
          isUser: true,
          img: "https://i.redd.it/37qu0i34fsl01.jpg",
        },
      ],
    },
    profilePage: {
      posts: [
        { id: 1, text: "Hi", likes: 33 },
        { id: 2, text: "Hello, Bitch", likes: 1 },
        { id: 3, text: "Fuck you", likes: 11 },
        { id: 4, text: "No fuck you!", likes: 20 },
      ],
      newText: "hellou",
    },
  },

  sendMessage(text) {},
  call() {
    console.log("sdfsd");
  },
  subscibe(obvserver) {
    this.call = obvserver;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    //{ type:'ADD-POST'}
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        text: this._state.profilePage.newText,
        likes: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this.call();
      this._state.profilePage.newText = "";
    } else if (action.type === CHANGE_TEXT) {
      this._state.profilePage.newText = action.text;
      this.call();
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 1,
        text: action.text,
        isUser: true,
        img:
          "https://ranbus.fra1.cdn.digitaloceanspaces.com/ranbus/media/images/2020/05/23/1590240603_iavvKTvmzW.jpg",
      };
      this._state.dialogsPage.messages.push(newMessage);
      this.call();
    }
  },
};
export const addPostActionCreater = () => ({
  type: ADD_POST,
});
export const changeTextActionCreator = (text) => ({
  type: CHANGE_TEXT,
  text,
});
export const sendMessageActionCreator = (text) => {
  return {
    type: SEND_MESSAGE,
    text,
  };
};

window.store = store;
let liza =
  "Я люблю Лизу очень сильно я отдам ей все свои деньги и свое сердце. Михаил Ковальчук. Это нотариально заверенная расписка. Лиза, забирай мои деньги. Мое сердце и душа уже твои.";
export default store;
