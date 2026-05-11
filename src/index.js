import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ScrollToTop } from "./components";
import { FilterProvider, CartProvider } from "./context";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <FilterProvider>
        <BrowserRouter>
          <ScrollToTop />
          <ToastContainer closeButton={false} autoClose={5000} position="bottom-right"/>
          <App />
        </BrowserRouter>
      </FilterProvider>
    </CartProvider>
  </React.StrictMode>,
);
