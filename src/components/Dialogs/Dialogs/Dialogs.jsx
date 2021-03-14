import React from "react";
import {
  changeMessageTextCreator,
  sendMessageActionCreator,
} from "../../../Redux/Redusers/dialogsReduser";
import DialogItem from "../DialogItem/DilaogItem";
import Message from "../Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let send = (event) => {
    event.preventDefault();
    let text = textarea.current.value;

    props.dispatch(sendMessageActionCreator(text));
  };
  let change = () => {
    let text = textarea.current.value;
    props.dispatch(changeMessageTextCreator(text));
  };
  let textarea = React.createRef();
  return (
    <div className={s.dialogs}>
      <div className={s.chats}>
        <h2 className={s.title}>Dialogs</h2>
        <ul className={s.list}>
          {props.data.dialogs.map((item) => {
            return <DialogItem name={item.name} id={item.id}></DialogItem>;
          })}
        </ul>
      </div>

      <div className={s.messages}>
        <div className={s.wrapper}>
          {props.data.messages.map((item) => (
            <Message
              message={item.text}
              id={item.id}
              isUser={item.isUser}
              img={item.img}
            ></Message>
          ))}
        </div>

        <form onSubmit={send} className={s.text}>
          <textarea
            className={s.textarea}
            value={props.data.messageArea}
            ref={textarea}
            cols="30"
            rows="10"
            onChange={change}
            placeholder="Your Message"
          ></textarea>
          <button onClick={send} onSubmit={send} className={s.send}>
            send
          </button>
        </form>
      </div>
    </div>
  );
};
export default Dialogs;
