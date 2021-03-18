import { connect } from "react-redux";
import {
  changeMessageTextCreator,
  sendMessageActionCreator,
} from "../../../Redux/Redusers/dialogsReduser";
import Dialogs from "../Dialogs/Dialogs";
let mapState = (state) => {
  return {
    data: state.dialogsPage,
  };
};
let mapDispatch = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    textChange: (text) => {
      dispatch(changeMessageTextCreator(text));
    },
  };
};
const DialogsContainer = connect(mapState, mapDispatch)(Dialogs);
export default DialogsContainer;
