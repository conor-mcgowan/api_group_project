import React, { useState } from "react";

const LoginPage = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(history);
  function login() {
    console.log(username, password);
    if (username.length > 3 && password.length > 3) {
      props.setUser(username);
      history.push("/search");
    }
  }
  return (
    <>
      <h1 className="">Login</h1>
      <div className="">
        <div className="">
          <label className="" htmlFor="username">
            Username
          </label>
          <input
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
          />
        </div>
        <div className="">
          <label className="" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
        </div>
        <button className="submit" onClick={() => login()}>
          Login
        </button>
      </div>
    </>
  );
};

export default (LoginPage)