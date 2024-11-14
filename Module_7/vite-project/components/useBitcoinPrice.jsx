import { useEffect, useReducer } from "react";

const initialState = {
  price: null,
  loading: true,
  error: null,
};

function priceReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, price: action.payload };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error("Unhandled action type");
  }
}

function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(priceReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch({ type: "FETCH_INIT" });

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
      { signal }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data.bitcoin[currency.toLowerCase()],
        });
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          dispatch({ type: "FETCH_FAILURE", payload: error.message });
        }
      });

    return () => {
      controller.abort();
    };
  }, [currency]);

  return state;
}

export default useBitcoinPrice;
