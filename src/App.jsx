import { useState } from "react";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="wrapper">
      <div className="auth-box">
        <h1 className="logo">Gram</h1>

        <h2>{isLogin ? "Sign In" : "Create Account"}</h2>

        <form>
          {!isLogin && (
            <input type="text" placeholder="Full Name" />
          )}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p
          className="switch"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Create new account"
            : "Already have an account?"}
        </p>
      </div>
    </div>
  );
}