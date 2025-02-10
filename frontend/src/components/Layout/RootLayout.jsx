import {NavLink, Outlet } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">
          <img src="../assets/images/himalayan-connect-nyc.png" alt="logo"/> 
          </NavLink>
          <SearchBar/>
          <NavLink to="add-service">Add Service</NavLink>
          <NavLink to="login">Login/Register</NavLink>
          <NavLink to="account">
            <img src="../src/assets/images/account.png" alt="account"/>
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>

    </div>

    
  );
};

export default RootLayout;
