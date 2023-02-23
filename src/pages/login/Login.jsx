import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Heloo World.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
            deserunt eaque omnis sint possimus dolores id quod excepturi sequi
            incidunt laborum! Nemo, vitae quos! Dolore, eos. Libero eos maxime
            nisi?
          </p>
          <span>Don't Have an account ?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" id="" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
