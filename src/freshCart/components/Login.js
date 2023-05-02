import React, { useContext, useRef, useState } from "react";
import AuthContext from "../context/authContext";
import Toaster from "../utils";
import loginStyles from "../styles/login.module.css";
const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [err, setErr] = useState({
    username: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = validateForm();
    if (valid) {
      setIsLogin(valid);
    } else {
      Toaster("Required Fields must be filled!", "warning");
    }
  };
  const validateForm = () => {
    if (usernameRef.current.value.trim() === "") {
      setErr({ ...err, username: "User Name is Required!" });
      return false;
    } else if (passwordRef.current.value.trim() === "") {
      setErr({ username: "", password: "Password is Required!" });
      return false;
    }
    setErr({ username: "", password: "" });
    Toaster("Logged In Successfully!", "success");
    return true;
  };
  return (
    <>
      <div className={loginStyles.loginContainer}>
        <div className={loginStyles.heading}>Login</div>
        <div>
          <form
            className={loginStyles.loginForm}
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className={loginStyles.formGroup}>
              <label>User Name</label>
              <input type={"text"} name="username" ref={usernameRef} />
              {err.username.length > 0 && (
                <span style={{ color: "red" }}> {err.username} </span>
              )}
            </div>
            <div className={loginStyles.formGroup}>
              <label>Password</label>
              <input type={"text"} name="password" ref={passwordRef} />
              {err.password.length > 0 && (
                <span style={{ color: "red" }}> {err.password} </span>
              )}
            </div>
            <button className={loginStyles.login} type="submit">
              Login
            </button>
          </form>
          <button>Register</button>
        </div>
      </div>
    </>
  );
};

export default Login;
