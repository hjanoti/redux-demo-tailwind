import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App, ReactReduxApp, ReduxApp } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
//import { store } from "./Redux/State/store";
import { store } from "./State/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

store.subscribe(() => {
  console.log("state:", store.getState());
});

root.render(
  // <React.StrictMode>
  // <ReduxApp />
  <Provider store={store}>
    {/* <ReactReduxApp /> */}
    <App />
  </Provider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
