import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="/profile">Home</a>
        </li>
        <li className={s.item}>
          <a href="/dialogs">Messages</a>
        </li>
        <li className={s.item}>
          <a href="">News</a>
        </li>
        <li className={s.item}>
          <a href="">Music</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
