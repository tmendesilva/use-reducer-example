import React, { useReducer, useState } from "react";

const initialState = { count: 0 };

const ACTIONS = {
  DECREMENT: "decrement",
  INCREMENT: "increment",
  DOUBLE: "multiply",
  HALF: "divide",
  RESET: "reset",
  CUSTOM: "custom",
};

function reducer(state, action) {
  switch (action.type) {
    case "decrement":
      return { count: state.count - 1 };
    case "increment":
      return { count: state.count + 1 };
    case "multiply":
      return { count: state.count * 2 };
    case "divide":
      return { count: state.count / 2 };
    case "reset":
      return initialState;
    case "custom":
      return { count: action.payload };
    default:
      return state;
  }
}

export function CounterUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [customCount, setCustomCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.CUSTOM, payload: customCount });
  }

  return (
    <div>
      <h1>Counter useReducer</h1>
      <span>{state.count}</span>
      <br />
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DOUBLE })}>x2</button>
      <button onClick={() => dispatch({ type: ACTIONS.HALF })}>/2</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>RESET</button>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="custom-value">Enter with a custom number:</label>
        <input
          id="custom-value"
          type="number"
          value={customCount}
          onChange={(e) => setCustomCount(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
