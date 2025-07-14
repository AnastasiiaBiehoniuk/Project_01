import { Routes, Route } from "react-router-dom";
import { AgePredictor } from "../components/AgePredictor/AgePredictor";
import { Counter } from "../components/Counter/Counter";
import { GenderPredictor } from "../components/GenderPredictor/GenderPredictor";
import BuyPony from "../components/pony/BuyPony/BuyPony";
import MyPony from "../components/pony/MyPony/MyPony";
import { ACCOUNT_ROUTES, ROUTES } from "../constants/routes";
import { MainLayout } from "../layout/MainLayout";
import { PonyLayout } from "../layout/PonyLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import { AccountLayout } from "../layout/AccountLayout";
import AccountSettings from "../components/AccountSettings/AccountSettings";
import AccountInfo from "../components/AccountInfo/AccountInfo";
import { ProductsList } from "../components/ProductsList/ProductsList";
import Registration from "../pages/Registration/registration";
import ProductPage from "../pages/ProductPage/ProductPage";
import UsersList from "../pages/UsersList/UsersList";
import UserPage from "../pages/UserPage/UserPage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/users" element={<UsersList />} />
      <Route path="/users/:id" element={<UserPage />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.GENDER_PREDICTOR} element={<GenderPredictor />} />
          <Route path="/age-predictor" element={<AgePredictor />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/pony" element={<PonyLayout />}>
            <Route path="/pony/my-pony" element={<MyPony />} />
            <Route path="/pony/buy-pony" element={<BuyPony />} />
          </Route>
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={"/products"} element={<ProductsList />} />
          <Route path={"/products/:id"} element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path={ROUTES.ACCOUNT} element={<AccountLayout />}>
            <Route
              path={ACCOUNT_ROUTES.ACCOUNT_INFO}
              element={<AccountSettings />}
            />
            <Route
              path={ACCOUNT_ROUTES.ACCOUNT_SETTINGS}
              element={<AccountInfo />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}