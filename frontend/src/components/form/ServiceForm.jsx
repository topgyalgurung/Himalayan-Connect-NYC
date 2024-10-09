import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/send";

const ServiceForm = () => {
  const INITIAL_STATE = {
    name: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zip: null,
    contact: "",
    open: "",
    close: "",
    picture: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    // GENERIC HANDLE CHANGE
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...formData });
    alert(`Created user ${name} w/ service ${service} & address ${address}`);
    setFormData(INITIAL_STATE);
  };
  return (
    <div>
      <h1> Add a Service</h1>
      <h2>
        {" "}
        Provide as much detail as possible. Your request will be reviewed by our
        team before we add it on our site
      </h2>

      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Description"
          variant="standard"
          type="service"
          placeholder="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address(required)"
          variant="standard"
          type="address"
          placeholder="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="city"
          label="City"
          variant="standard"
          type="city"
          placeholder="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <br />
        <TextField
          id="state"
          label="State"
          variant="standard"
          type="state"
          placeholder="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" endIcon={<SendIcon />}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ServiceForm;
