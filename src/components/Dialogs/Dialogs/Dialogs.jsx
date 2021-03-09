import DialogItem from "../DialogItem/DilaogItem";
import Message from "../Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dataDialog = [
    { id: 1, name: "Lena" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Lesha" },
    { id: 4, name: "Liza" },
    { id: 4, name: "Michael" },
  ];
  let messages = [
    { id: 1, text: "Hi" },
    { id: 1, text: "Hello, Bitch" },
    { id: 1, text: "Fuck you" },
    { id: 1, text: "No fuck you!" },
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.chats}>
        <h2 className={s.title}>Dialogs</h2>
        <ul className={s.list}>
          {dataDialog.map((item) => {
            return <DialogItem name={item.name} id={item.id}></DialogItem>;
          })}
        </ul>
      </div>

      <div className={s.messages}>
        {messages.map((item) => (
          <Message message={item.text} id={item.id}></Message>
        ))}
      </div>
    </div>
  );
};
export default Dialogs;
