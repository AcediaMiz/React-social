const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
let initialState = {
  dialogs: [
    { id: 1, name: "Lena" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Lesha" },
    { id: 4, name: "Liza" },
    { id: 5, name: "Michael" },
    { id: 6, name: "Muhammad" },
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
    case SEND_MESSAGE: {
      return {
        ...state,
        messageArea: "",
        messages: [
          ...state.messages,
          {
            id: state.messages.length + 1,
            text: state.messageArea,
            isUser: true,
            img:
              "https://ranbus.fra1.cdn.digitaloceanspaces.com/ranbus/media/images/2020/05/23/1590240603_iavvKTvmzW.jpg",
          },
        ],
      };
    }

    case CHANGE_MESSAGE_TEXT:
      return {
        ...state,
        messageArea: action.text,
      };

    default:
      return state;
  }
};
export const changeMessageTextCreator = (text) => ({
  type: CHANGE_MESSAGE_TEXT,
  text,
});

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export default dialogsReduser;
