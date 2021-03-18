import PostsContainer from "../PostsContainer/PostsContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo></ProfileInfo>
      <PostsContainer></PostsContainer>
    </div>
  );
};

export default Profile;
