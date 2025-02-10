import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/send";

const ServiceForm = ({ addItem }) => {
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
  // essential state variables
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    // GENERIC HANDLE CHANGE
    setAnswer(e.target.value);
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }

    addItem({ ...formData });
    alert(`Created user ${name} w/ service ${service} & address ${address}`);
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
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
          disabled={status === "submitting"}
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
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disabled={answer.length === 0 || status === "submitting"}
        >
          Submit
        </Button>
        {error != null && <p className="Error">{error.message}</p>}
      </form>
    </div>
  );
};

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}

export default ServiceForm;
