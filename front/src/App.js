import React from "react";
import { ToastContainer } from "react-toastify";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./service/history";
import { GlobalStyle } from "./styles/global";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ButtonTop from "./components/ButtonTop";

function App() {
  return (
    <Router history={history}>
      <NavBar />
      <Routes />
      <ButtonTop />
      <Footer />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
