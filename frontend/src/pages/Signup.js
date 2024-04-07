import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupSubmitHandler = async (e) => {
    e.preventDefault(); // we want to stop the default behaviour of page refresh which happens on submit
  };

  return (
    <form className="signup" onSubmit={signupSubmitHandler}>
      <h3>Signup</h3>
      <label>Email: </label>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      ></input>

      <label>Password: </label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      ></input>

      <button>Sign Up</button>
    </form>
  );
};

export default Signup;
