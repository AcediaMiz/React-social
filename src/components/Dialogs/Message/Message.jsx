import s from "./Message.module.css";

const Message = (props) => {
  let { message, id, isUser, img } = props;
  let className = [s.message, s[isUser]];
  return (
    <div className={[s.wrapper, s[isUser]].join(" ")}>
      <div className={className.join(" ")}>{message} </div>
      <img src={img} alt="" />
    </div>
  );
};
export default Message;
