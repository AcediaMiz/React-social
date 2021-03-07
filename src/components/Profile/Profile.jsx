import Posts from "./Posts/Posts";

import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.profile}>
      <img
        src="https://static.barcelo.com/content/dam/bhg/master/es/hoteles/republica-checa/praga/imagenes-praga/praga-rutas-1600.jpg.bhgimg.optm1100.jpg/1604687947914.jpg"
        alt=""
        className="profile__pic"
      />

      <Posts></Posts>
    </div>
  );
};
export default Profile;
