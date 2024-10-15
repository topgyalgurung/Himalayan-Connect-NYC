import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button> Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

export const contactAction = async ({ request }) => {
  console.log(request);
  const data = await request.formData();
  //access individual values
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submission);

  //send post request to some api to save it to database

  // little check on frontend to simulate
  // to access this return we can use useActionData hook
  if (submission.message.length < 10) {
    return { error: "message must be over 10 chars " };
  }

  //redirect the user
  return redirect("/");
};

export default Contact;
