import Avatar from "./Avatar";
import Posts from "./Posts";

const Profile = () => {
  return (
    <div className="content">
      <img
        src="https://static.barcelo.com/content/dam/bhg/master/es/hoteles/republica-checa/praga/imagenes-praga/praga-rutas-1600.jpg.bhgimg.optm1100.jpg/1604687947914.jpg"
        alt=""
        className="content__pic"
      />

      <Avatar></Avatar>
      <Posts></Posts>
    </div>
  );
};
export default Profile;
