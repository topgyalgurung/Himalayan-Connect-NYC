import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { useState, useMemo } from "react";

//layouts
import RootLayout from "./components/layouts/RootLayout";
import HelpLayout from "./components/layouts/HelpLayout";

//pages
import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home/Home";
import AddService from "./components/pages/AddService";
import ServiceDetail from "./components/pages/ServiceDetail";
import Suggest from "./components/pages/Suggest";
import Contact, { contactAction } from "./components/pages/help/Contact";
import Faq from "./components/pages/help/Faq";

//auth
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
//context
import {UserContext} from "./context/UserContext";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="add" element={<AddService />} />
      <Route path="service" element={<ServiceDetail />} />
      <Route path="suggest" element={<Suggest />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="help" element={<HelpLayout />} action={contactAction}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <UserContext.Provider value={ value}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
