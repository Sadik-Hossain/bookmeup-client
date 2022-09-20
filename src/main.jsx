import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SearchContextProvider } from "./context/SearchContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchContextProvider>
  </React.StrictMode>
);
