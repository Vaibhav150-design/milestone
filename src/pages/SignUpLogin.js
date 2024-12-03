
import React from "react";

const SignUpLogin = () => {
  return (
    <div className="signup-login">
      <h2>Login or Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <button>Sign Up</button>
    </div>
  );
};

export default SignUpLogin;
