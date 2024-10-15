import { NavLink, Outlet } from "react-router-dom";
const HelpLayout = () => {
  return (
    <div>
      <h2>HelpLayout</h2>
      <p>
        Ad consequat ipsum sint eiusmod proident est ex mollit Lorem aliquip
        eiusmod amet ad laborum.
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact"> Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
