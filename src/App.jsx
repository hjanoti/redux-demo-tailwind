import logo from "./logo.svg";
import "./App.css";

import { store } from "./Redux/State/store";
import { deposit, withdraw } from "./Redux/State/action";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";

export const App = () => {
  return (
    <div>
      <NavBar />
      <div className="my-0 mx-auto p-4 max-w-[140rem] md:p-12">
        <Products />
      </div>
      <Cart />
    </div>
  );
};

export function ReactReduxApp() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  //console.log(state);
  return (
    <div>
      <h1>React Redux Demo</h1>
      <h3>Balance: {state.accountBalance}</h3>
      <button onClick={() => dispatch(deposit(100))}>Deposit 100</button>
      <button onClick={() => dispatch(withdraw(50))}>Withdraw 50</button>
    </div>
  );
}

export function ReduxApp() {
  // //console.log(store);
  // //console.log(store.getState());

  // ///// subscribe to the state so that whenever change happens
  // // we get to know about it
  // store.subscribe(() => {
  //   console.log("state updated", store.getState());
  // });

  // // update state
  // store.dispatch(deposit(100));
  // //console.log(store.getState());

  // store.dispatch(withdraw(50));
  // //console.log(store.getState());

  return (
    <div className="App">
      <h1>Redux Introduction</h1>
    </div>
  );
}
