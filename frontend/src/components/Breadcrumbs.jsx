import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";
const Breadcrumbs = () => {
  const location = useLocation();
  // /help/contact --> help | contact
  let currentLink = "";
  const crumb = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return <div className="breadcrumbs">{crumb}</div>;
};

export default Breadcrumbs;
