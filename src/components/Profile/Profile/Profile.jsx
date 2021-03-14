import Posts from "../Posts/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

import s from "./Profile.module.css";

const Profile = (props) => {
  debugger;
  return (
    <div className={s.profile}>
      <ProfileInfo></ProfileInfo>
      <Posts dispatch={props.dispatch} data={props.data}></Posts>
    </div>
  );
};

export default Profile;
