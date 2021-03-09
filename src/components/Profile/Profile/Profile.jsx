import Posts from "../Posts/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo></ProfileInfo>
      <Posts></Posts>
    </div>
  );
};
export default Profile;
