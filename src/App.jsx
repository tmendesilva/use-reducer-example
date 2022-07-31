import React from "react";
import { CounterUseReducer } from "./counterUseReducer";
import { CounterUseState } from "./counterUseState";

export default () => {
  return (
    <>
      <CounterUseState />
      <CounterUseReducer />
    </>
  );
};
