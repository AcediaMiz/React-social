import React from "react";
import DialogItem from "../DialogItem/DilaogItem";
import Message from "../Message/Message";
import s from "./Dialogs.module.css";
import { sendMessageActionCreator } from "../../../Redux/state";

const Dialogs = (props) => {
  let send = () => {
    let text = textarea.current.value;

    props.dispatch(sendMessageActionCreator(text));
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

        <div className={s.text}>
          <textarea
            className={s.textarea}
            ref={textarea}
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button onClick={send} className={s.send}>
            send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
