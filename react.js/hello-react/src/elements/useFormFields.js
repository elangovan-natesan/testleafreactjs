import { useReducer } from "react";

function useFormFields(initialState) {
  function reducer(state, action) {
    //state here is existing state (or) current state
    //In simple terms for a single state if you want to handle many action then you should use reducer function
    switch (action.type) {
      case "SET_FIELD": {
        return {
          ...state,
          [action.field]: action.value,
        };
      }

      case "RESET_FIELDS":
        return initialState;

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  // reducer: A function that takes current state and an action, and returns the new state.
  // initialState: The starting state.
  // dispatch: A function you call to send an action to the reducer.

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name, //field can be username (or) password
      value: e.target.value,
    });
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FIELDS" });
  };

  return [state, handleChange, handleReset];
}
