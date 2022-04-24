import React, { useState } from "react";
import Home from "./Home";
import Services from "./Services";
import { NavLink, Route, Routes } from "react-router-dom";
import Registration from "./Registration";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>


      {home ? (
        <form onSubmit={handleLogin} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col ml-40">

          <p className='px-9 -mt-3  text-2xl  underline decoration-sky-500 ml-5'>LogIn</p>
          <div className="form-group">
            <label class="block text-grey-darker text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              className="p-3 border-[1px] border-slate-500 rounded-sm w-80"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label class="block text-grey-darker text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              className="p-3 border-[1px] border-slate-500 rounded-sm w-80"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 w-40">
            Login
          </button>
          <p className="forgot-password text-right">
            <NavLink to="/register"> Don't have an account{" "}register?</NavLink>
          </p>
          {flag && (
            <strong class="font-bold bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">Please fill all data correctly</strong>
          )}
        </form>
      ) : (
        <Services />
      )}
    </div>
  );
}

export default Login;
