import { Button } from "@mui/material";
import React, { useState } from "react";
import { LoginData } from "../services/api";

export default function Login() {
    if(localStorage.getItem("user"))  window.location.href='/';
    const [login,setLogin]=useState({
        email:'',
        password:''
    });
    const handleSubmit=()=>{
         const user=LoginData(login);
         localStorage.setItem("user",JSON.stringify(user));
         window.location.href="/";
    }
  return (
    <div>
      <form className="form-login" onSubmit={handleSubmit}>
        <h2 className="heading-log">LogIn Here</h2>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
        </div>

        {/* <!-- 2 column grid layout for inline styling --> */}

        {/* <!-- Submit button --> */}
        <Button
          type="button mx-2"
          variant="contained"
          color="primary"
          style={{
            float: "left",
            padding: "5px 28px",
            borderRadius: "24px",
            color: "#fff",
            fontFamily: "cursive",
            letterSpacing: "2px",
          }}
          className="btn  mb-4"
        >
          Sign in
        </Button>

        {/* <!-- Register buttons --> */}
        <div className="text-center" style={{"fontFamily":"cursive","letterSpacing":"2px"}}>
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}
