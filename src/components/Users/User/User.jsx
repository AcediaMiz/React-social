import s from "./User.module.css";
import userImg from "../../../assets/img/user.png";
const User = (props) => {
  let { data } = props;
  let followed;
  if (data.followed === false) {
    followed = "Follow";
  } else if (data.followed === true) {
    followed = "Unfollow";
  }
  return (
    <div className={s.wrapper}>
      <div className={s.follow}>
        <img
          className={s.img}
          src={data.photos.small === null ? userImg : data.photos.small}
          alt=""
        />
        <button
          onClick={() => {
            if (data.followed === false) {
              props.follow(data.id);
            } else if (data.followed === true) {
              props.unfollow(data.id);
            }
          }}
          className={s.btn}
        >
          {followed}
        </button>
      </div>
      <div className={s.box}>
        <div className={s.text}>
          <h2 className={s.name}>{data.name}</h2>
          <p className={s.title}>{data.status}</p>
        </div>
        <div className={s.location}>
          <h3 className={s.contry}>{data.contry}</h3>
          <h3 className={s.city}>{data.city}</h3>
        </div>
      </div>
    </div>
  );
};
export default User;
