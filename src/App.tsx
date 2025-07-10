import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { AgePredictor } from "./components/AgePredictor/AgePredictor";
import { GenderPredictor } from "./components/GenderPredictor/GenderPredictor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { MainLayout } from "./layout/MainLayout";
import { PonyLayout } from "./layout/PonyLayout";
import MyPony from "./components/pony/MyPony/MyPony";
import BuyPony from "./components/pony/BuyPony/BuyPony";
import { ROUTES } from "./constants/routes";
import Registration from "./pages/Registration/registration";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Settings from "./pages/Account/Settings";
import UserInfo from "./pages/Account/UserInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<MainLayout />}>
          <Route path="settings" element={<Settings />} />
          <Route path="user" element={<UserInfo />} />
            <Route index element={<Home />} />
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route path={ROUTES.GENDER_PREDICTOR} element={<GenderPredictor />} />
            <Route path="/age-predictor" element={<AgePredictor />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/pony" element={<PonyLayout />}>
              <Route path="/pony/my-pony" element={<MyPony />} />
              <Route path="/pony/buy-pony" element={<BuyPony />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;