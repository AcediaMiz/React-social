import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <a href="" className={s.link}>
        <img
          src="http://demo.foxthemes.net/socialitev2.0/assets/images/logo.png"
          alt=""
        />
      </a>
    </header>
  );
};
export default Header;
