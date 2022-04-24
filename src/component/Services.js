import React from "react";
import Home from './Home';
import About from "./About";
import Search from "./Search";
import AddForm from './AddForm'
import Login from './Login'
import { Routes, Route, Outlet, Navigate, NavLink } from "react-router-dom";
import * as Icons from 'react-icons/fa';
import Registration from "./Registration";
import { useState } from "react";

const Services = () => {
    const [user, setUser] = useState(null);
    const handleLogin = () => {
        let email = localStorage.getItem("sanskarEmail").replace(/"/g, "");
        // let password = localStorage.getItem("sanskarPassword").replace(/"/g, "");
        setUser(email)
    }
    const handleLogout = () => {
        setUser(null)
        localStorage.clear(setUser)

    }

    const ProtectedRoute = ({
        user,
        redirectPath = '/search',
        children,
    }) => {
        let email = localStorage.getItem("sanskarEmail").replace(/"/g, "");
        setUser(email)
        if (!user) {
            return <Navigate to={redirectPath} replace />;
        }

        return children;
    };
    return (
        <>
         <NavLink className="float-right mr-5" onClick={handleLogout} to='/register'>Logout</NavLink>
         <button className="float-left ml-20" onClick={handleLogin}>Login</button>
            <Routes>
                <Route path='/' element={<Navigate to='/search' replace/>} />
                <Route path='/search' element={<Search />}>
                    <Route index element={
                        <ProtectedRoute user={user}>
                            <Home />
                        </ProtectedRoute>
                    }
                    />
                   
                    <Route path="About" element={
                    <ProtectedRoute user={user}>
                    <About />
                    </ProtectedRoute>
                    } />
                </Route>
                <Route path="AddForm" element={<AddForm />} />
                <Route path="login" element={
                <ProtectedRoute>
                <Login />
                </ProtectedRoute>
                }
                 />
                 <Route path="/register" element={<Registration />} />
            </Routes>
          {/* <center>  <button onClick={handleLogin}>Login</button></center> */}
       
            <Outlet />
            <div className="top-20 left-0 fixed w-16 h-full "><br />
                <button className="text-2xl px-2 bg-slate-300 w-12  h-12 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">

                    <NavLink defaultChecked to={"/search"} style={({ isActive }) =>

                        ({ color: isActive ? 'green' : console.log('is active', isActive) })
                    }><Icons.FaSearch /></NavLink>

                </button><br /><br />
                <button className="text-2xl px-2 bg-slate-300 w-12  h-12 transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300">
                    <NavLink to={"/AddForm"} style={({ isActive }) =>
                        ({ color: isActive ? 'green' : console.log('upload', isActive) })
                    }><Icons.FaCloudUploadAlt /></NavLink>
                </button>
            </div>
        </>
    )
}
export default Services;
