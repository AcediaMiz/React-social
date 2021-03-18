import React from "react";
import DialogItem from "../DialogItem/DilaogItem";
import Message from "../Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let send = () => {
    props.sendMessage();
  };
  let change = () => {
    let text = textarea.current.value;
    props.textChange(text);
  };
  let textarea = React.createRef();
  let wrapper = React.createRef();

  return (
    <div className={s.dialogs}>
      <div className={s.chats}>
        <h2 className={s.title}>Dialogs</h2>
        <ul className={s.list}>
          {props.data.dialogs.map((item) => {
            return <DialogItem name={item.name} key={item.id}></DialogItem>;
          })}
        </ul>
      </div>

      <div className={s.messages}>
        <div ref={wrapper} className={s.wrapper}>
          {props.data.messages.map((item) => (
            <Message
              message={item.text}
              key={item.id}
              isUser={item.isUser}
              img={item.img}
            ></Message>
          ))}
        </div>

        <div className={s.text}>
          <textarea
            className={s.textarea}
            value={props.data.messageArea}
            ref={textarea}
            cols="30"
            rows="10"
            onChange={change}
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
