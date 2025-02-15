import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const Login = memo(() => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Login Page:请先登录</h2>
      <input type="password" />
      <button onClick={(e) => navigate("/home")}>登录</button>
    </div>
  );
});

export default Login;
