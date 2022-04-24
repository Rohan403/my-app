import React, { useState } from "react";
import Login from "./Login";
import Home from "./Home"
import {Routes,Route,Outlet,Navigate} from 'react-router-dom';

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col ml-5">
            <p className='px-9 -mt-3  text-2xl  underline decoration-sky-500 ml-5'>Register</p>

              <div class="mb-4">
                <label  class="block text-grey-darker text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div class="mb-4">
                <label  class="block text-grey-darker text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  placeholder="Enter your email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div class="mb-4">
                <label  class="block text-grey-darker text-sm font-bold mb-2">Password</label>
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div class="mb-4">
                <label  class="block text-grey-darker text-sm font-bold mb-2">Phone Number</label>
                <input
                  type="Phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  placeholder="Enter Phone No."
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>


              <button type="submit" className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-1 border-b-4 border-blue-700 hover:border-blue-500 rounded w-20">
                Register
              </button>
              <p onClick={handleClick} className="forgot-password text-right">
               <button> Already registered{" "}log in?</button>
                
              </p>
              {flag && (
              
                <strong class="font-bold bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">Please fill data correctly</strong>
               
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
            {/* <Routes>
              <Route to="/" element={<Navigate to='/Home' />} />  */}
              {/* <Route to="/Home" element={<Home />} /> */}
              {/* <Route path='/' element={<Navigate to='/search' />} /> */}
            {/* </Routes> */}
    </>
  );
}

export default Registration;
