import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";


export const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/contact">Контакты</Link></li>
          <li><Link to="/account">Личный кабинет</Link></li>
          <li><Link to="settings">Настройки</Link></li>
          <li><Link to="user">Информация о юзере</Link></li>
        </ul>
        <Link to="/">Home</Link>
        <Link to={ROUTES.REGISTRATION}>Sign Up</Link>
        <Link to={ROUTES.GENDER_PREDICTOR}>Gender predictor</Link>
        <Link to="/age-predictor">Age predictor</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/pony">Pony</Link>
      </nav>
    </>
  );
};
