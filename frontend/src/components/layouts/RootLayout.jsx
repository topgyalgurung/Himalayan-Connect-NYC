import {useState} from 'react';
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import Data from '../../data/Data';

const RootLayout = () => {
 
  return (
    <div>
      <header>
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between"> 
            <NavLink to="/" className="nav-item hover:text-gray-300 transition duration-300">
              Logo
            </NavLink>
              
              
          <NavLink to="add" className="nav-item hover:text-gray-300 transition duration-300">
              Add a Service
            </NavLink>
          <div className="flex space-x-4 items-center">
            <NavLink to="register" className="nav-item hover:text-gray-300 transition duration-300">
              Sign Up
            </NavLink>
            <NavLink to="login" className="nav-item hover:text-gray-300 transition duration-300">
              Login 
            </NavLink>
            <NavLink to="help" className="nav-item hover:text-gray-300 transition duration-300">
              Help
            </NavLink>
            
          </div>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

{
  /* <form id="search-form" role="search" className="search-form">
<input id="search" aria-label="Search Service" placeholder="Search" type="search" name="search" className="search-input" />
<button type="submit" className="search-button">Search</button>
</form> */
}
