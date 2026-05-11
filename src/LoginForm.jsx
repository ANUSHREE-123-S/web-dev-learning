import { useState } from "react";

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
    } else {
      alert("Welcome User");

      console.log(email);
      console.log(password);

      // clear input fields
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div>

      <h1>Login Form</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default LoginForm;