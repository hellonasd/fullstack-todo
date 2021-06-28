import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../auth/actions";
import "./style.css";

export const FormAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="auth-main">
      <div className="auth-main-wrapper">
        <form className="auth-form"onSubmit={(e) => e.preventDefault()}>
          <i className="svg-email"></i>
          <input
            type="text"
            className="auth-email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="svg-password"></i>
          <input
            type="password"
            className="auth-password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <div className="auth-btn">
            <button onClick={() => dispatch(actions.login({email, password}))} className="auth-btn-login">Login</button>
            <button onClick={() => dispatch(actions.registration({email, password}))} className="auth-btn-reg">Registation</button>
          </div>
        </form>
      </div>
    </div>
  );
};
