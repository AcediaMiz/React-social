import * as axios from "axios";
import User from "../User/User";
import s from "./Users.module.css";

const Users = (props) => {
  let getUsers = () => {
    console.log(props.data.users.length);
    if (props.data.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          console.log("lkjh");
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div className={s.l}>
      {props.data.users.map((item) => {
        return (
          <User
            data={item}
            follow={props.follow}
            unfollow={props.unfollow}
          ></User>
        );
      })}
      <button onClick={getUsers}>get users</button>
    </div>
  );
};
export default Users;
