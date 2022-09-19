import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/actions/products";

import Header from "./Header/Header";
import Main from "./Main/Main";
import CartPage from "./Cart/CartPage";
import AdminPage from "./Admin/AdminPage";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import LoginPage from "./RegistrationPage/LoginPage";
import Footer from "./Footer/Footer";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchProducts());
  return (
    <div className="wrapper">
      <div className="_container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} exact />
          <Route path="/cartpage" element={<CartPage />} exact />
          <Route path="/adminpage" element={<AdminPage />} exact />
          <Route
            path="/registrationpage"
            element={<RegistrationPage />}
            exact
          />
          <Route path="/loginpage" element={<LoginPage />} exact />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
