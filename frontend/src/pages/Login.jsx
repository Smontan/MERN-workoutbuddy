import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    await login(email, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button
        type="submit"
        disabled={isLoading}
        className={isLoading ? "disabled" : ""}
      >
        Log in
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default Login;
