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
import RootLayout from "./components/Layout/RootLayout";
// import HelpLayout from "./components/layout/HelpLayout";

//pages
import NotFound from "./components/pages/NotFound";
import HomePage from "./components/pages/HomePage/HomePage";
// import AddService from "./components/pages/AddService/AddService";
// import ServiceDetail from "./components/ServiceDetails/ServiceDetails";
// import Suggest from "./components/pages/Suggest";
// import Contact, { contactAction } from "./components/pages/help/Contact";
// import Faq from "./components/pages/help/Faq";

//auth
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
//context
import { UserContext } from "./context/UserContext";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      {/* <Route path="login" element={<Login />}/>
      <Route path="user-profile" element={<Profile />}/>
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="add-service" element={<AddService />} />
      <Route path="service/:name" element={<ServiceDetail />} />
       */}

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
    <UserContext.Provider value={value}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
