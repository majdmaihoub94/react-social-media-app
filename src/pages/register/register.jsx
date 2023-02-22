import React, { useState, useEffect } from "react";
import "./register.scss";

const Register = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" id="" />
            <button>Register</button>
          </form>
        </div>
        <div className="left">
          <h1>Go Social.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
            deserunt eaque omnis sint possimus dolores id quod excepturi sequi
            incidunt laborum! Nemo, vitae quos! Dolore, eos. Libero eos maxime
            nisi?
          </p>
          <span>Do you Have an account ?</span>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
