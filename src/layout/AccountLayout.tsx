import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";

export const AccountLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <footer>
        <a href="">Личный кабинет</a>
      </footer>
    </>
  );
};


export default AccountLayout;