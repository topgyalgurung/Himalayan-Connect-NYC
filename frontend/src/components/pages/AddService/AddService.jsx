import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import ServiceForm from "../../ServiceManagement/AddServiceForm";

const AddService = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      {/* <pre> {JSON.stringify(user, null, 2)}</pre> */}
      <h1> Add a Service</h1>
      <h2>
        {" "}
        Provide as much detail as possible. Your request will be reviewed by our
        team before we add it on our site
      </h2>
      <ServiceForm />
    </div>
  );
};

export default AddService;
