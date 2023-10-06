// import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.css";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import CartProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <DarkModeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </DarkModeProvider>
  // </React.StrictMode>
);
