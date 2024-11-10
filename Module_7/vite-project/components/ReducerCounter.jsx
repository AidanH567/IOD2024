import { useReducer } from "react";
export function ReducerCounter() {

    const reducer = (state, action) => {
switch (action.type) { // switch statements are common in reducers
case "increment":
return state + 1;
case "decrement":
return state - 1;
default:
return state;
}
};
// useReducer takes a reducer function and the initial state value
// returns array with the state variable and a dispatch function
const [counter, dispatch] = useReducer(reducer, 0);
const handleIncrement = () => {
// we call the dispatch function to make all state updates
dispatch({ type: "increment" });
};
const handleDecrement = () => {
// dispatch takes a single argument - object passed to reducer
dispatch({ type: "decrement" });
};
return (
<div className="ReducerCounter componentBox">
<h2>Count: {counter}</h2>
<button onClick={handleIncrement}>Reducer Increment</button>
<button onClick={handleDecrement}>Reducer Decrement</button>
<button onClick={handleIncrement}>Reducer Increment by 5</button>
<button onClick={handleDecrement}>Reducer Decrement by 5</button>
</div>
);
};
// see next slide for reducer function
export default ReducerCounter;