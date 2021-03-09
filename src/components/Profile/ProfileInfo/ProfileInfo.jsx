import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileWindow}>
      <div className={s.banner}></div>

      <div className={s.info}>
        <img
          className={s.avatar}
          src="https://www.vhv.rs/dpng/d/178-1785117_discord-png-avatar-anime-transparent-png.png"
          alt=""
        />
        <div>
          <h2>Michael</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit
            assumenda nobis corrupti cupiditate unde veniam quae, laudantium
            rerum enim voluptatibus et omnis eos qui quis molestiae aut
            distinctio voluptate!
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
