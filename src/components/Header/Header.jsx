import s from "./Header.module.css";
const Header = () => {
  return (
    <header className={s.header}>
      <a href="" className={s.link}>
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/174/174858.svg?token=exp=1615105056~hmac=abf8db59733292598bd3c2e7f48cf627"
          alt=""
        />
      </a>
    </header>
  );
};
export default Header;
