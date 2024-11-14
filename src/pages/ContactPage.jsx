import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendContactForm } from "../redux/contactSlice";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const dispatch = useDispatch();
  const contactStatus = useSelector((state) => state.contact.status);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContactForm(formData));
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
      {contactStatus === "loading" && <p>Sending...</p>}
      {contactStatus === "succeeded" && <p>Message sent successfully!</p>}
      {contactStatus === "failed" && <p>Failed to send message.</p>}
    </div>
  );
};

export default ContactPage;
