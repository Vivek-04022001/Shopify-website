import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


// import { CardProvider } from "./context/CardContext.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { selectProductOptions, setProductOptions } from "./store/productspage/productspageSlice.js";

store.dispatch(setProductOptions())
const selectOptions = store.getState(selectProductOptions)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
