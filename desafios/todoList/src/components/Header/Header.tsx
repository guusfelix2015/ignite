import Logo from "../../assets/todo.svg";
import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.header}>
      <img src={Logo} alt="Logo Todo" />
    </header>
  );
}
