import { useReducer } from "react";

function formReducer(state, action) {
  //state here is existing state
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.value };
    case "SET_PASSWORD":
      return { ...state, password: action.value };
    case "RESET":
      return { username: "", password: "" };
    default:
      return state;
  }
}

function LoginForm3() {
  // useReducer hook to manage the form's username & password state
  const [formState, dispatch] = useReducer(formReducer, {
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = formState; //object destructuring
    if (!username || !password) {
      alert("fill all the fields");
    } else {
      console.log("username :", username);
      console.log("password :", password);
      dispatch({ type: "RESET" }); //Reset form after submission
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h1>Login Form with useReducer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={(e) =>
              dispatch({ type: "SET_USERNAME", value: e.target.value })
            } // Dispatch action for username
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", value: e.target.value })
            } // Dispatch action for password
          />
        </div>
        <div>
          <button type="submit">Login</button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm3;
