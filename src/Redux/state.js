import dialogsReduser from "./Redusers/dialogsReduser";
import profileReduser from "./Redusers/profileReduser";

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
      messageArea: "",
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
    this._state.profilePage = profileReduser(action, this._state.profilePage);
    this._state.dialogsPage = dialogsReduser(action, this._state.dialogsPage);
    this.call();
  },
};
const liza =
  "Я люблю Лизу очень сильно я отдам ей все свои деньги и свое сердце. Михаил Ковальчук. Это нотариально заверенная расписка. Лиза, забирай мои деньги. Мое сердце и душа уже твои.";
export default store;
