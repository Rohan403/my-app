import Home from './component/Home';
import About from "./component/About";
import Search from "./component/Search";
import AddForm from './component/AddForm'

import { Route, Routes, Outlet, NavLink, Navigate, useNavigate } from 'react-router-dom';
import * as Icons from 'react-icons/fa';
import { useState} from "react";
import Registration from './component/Registration';
import Services from './component/Services';
const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  let data = localStorage.getItem('sanskarEmail')
  return (
    <>
      <nav class="flex items-center fixed w-full justify-between flex-wrap bg-cyan-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <span class="font-semibold text-xl tracking-tight">Trainee NTT</span>
        </div>
        <button className="  float-right text-4xl bg-blue-200" onClick={() => navigate(-1)}><Icons.FaArrowLeft /></button>
      </nav><br /><br /><br /><br /><br />
      <div class="space-x-4">
        {/* <Routes>
          <Route path='/' element={<Navigate to='/search' />} />
          <Route path='/search' element={<Search />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            </Route>
          <Route path="AddForm" element={<AddForm />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Outlet /> */}
        {/* <Registration /> */}
        {data==null ? <Registration /> : <Services />}
      </div>
      {/* <div className="top-20 left-0 fixed w-16 h-full "><br />
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
      </div> */}
      {/* <div>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute isLogged={isLogged} />}>
            <Route path="/profile" element={<Home />} />
            <Route path="About" element={<About />} />
          </Route>
        </Routes>
        <NavLink to="profile"> Got to Profile</NavLink><br/>
        <NavLink to="About">Go to About</NavLink>
        <button onClick={() => setIsLogged(true)}>LogIn</button>
        <button onClick={() => setIsLogged(false)}>LogOut</button>
      </div> */}
    </>
  )
}
export default App;
