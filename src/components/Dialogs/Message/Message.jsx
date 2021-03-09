import s from "./Message.module.css";

const Message = (props) => {
  let { message } = props;

  return <div className={s.message}>{message}</div>;
};
export default Message;
