import React from "react";
import "./App.css";
import { CounterUseReducer } from "./CounterUseReducer";
import { CounterUseState } from "./CounterUseState";
import LoginUseReducer from "./LoginUseReducer";
import LoginUseState from "./LoginUseState";

export default () => {
  return (
    <>
      {/* <CounterUseState /> */}
      {/* <CounterUseReducer /> */}
      {/* <LoginUseState /> */}
      <LoginUseReducer />
    </>
  );
};
