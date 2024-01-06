import React from "react";
import ReactDOM from "react-dom/client";
import { CardProvider } from "./context/CardContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </React.StrictMode>
);
