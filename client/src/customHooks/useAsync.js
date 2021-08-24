import { useEffect, useReducer } from "react";

const LOADING = "loading";
const SUCCESS = "success";
const ERROR = "error";

function reducer(state, action) {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: LOADING });
    try {
      const data = await callback();
      dispatch({ type: SUCCESS, data });
    } catch (err) {
      dispatch({ type: ERROR, err: err });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [state, fetchData];
}

export default useAsync;
