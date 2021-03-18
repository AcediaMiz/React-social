import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  console.info("render");
  let { name, id } = props;
  let path = "/dialogs/" + id;
  return (
    <li className={s.item}>
      <NavLink className={s.link} to={path}>
        {name}
      </NavLink>
    </li>
  );
};
export default DialogItem;
