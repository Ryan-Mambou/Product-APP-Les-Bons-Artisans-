import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Error from "./pages/error";
import "./App.css";
import Products from "./pages/products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/signup" exact element={<SignUp />}></Route>
        <Route path="/" exact element={<Products />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
