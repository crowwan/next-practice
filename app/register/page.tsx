import React from "react";

function Register() {
  return (
    <div>
      <form action="/api/auth/register" method="POST">
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit"> submit </button>
      </form>
    </div>
  );
}

export default Register;
