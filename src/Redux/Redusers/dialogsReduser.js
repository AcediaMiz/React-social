const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
let initialState = {
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
};
const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 1,
        text: action.text,
        isUser: true,
        img:
          "https://ranbus.fra1.cdn.digitaloceanspaces.com/ranbus/media/images/2020/05/23/1590240603_iavvKTvmzW.jpg",
      };
      state.messages.push(newMessage);

      state.messageArea = "";
      break;
    case CHANGE_MESSAGE_TEXT:
      state.messageArea = action.text;
      break;
  }
  return state;
};
export const changeMessageTextCreator = (text) => ({
  type: CHANGE_MESSAGE_TEXT,
  text,
});

export const sendMessageActionCreator = (text) => {
  return {
    type: SEND_MESSAGE,
    text,
  };
};
export default dialogsReduser;
