
import { useState } from "react";
import "../styles/Contact.css";
import PhoneInput, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: undefined,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.phone) {

      newErrors.phone = "Phone number is required";

    }
    else if (!isValidPhoneNumber(form.phone)) {

      newErrors.phone = "Please enter a valid phone number";

    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setErrors({});
    }
  };
  return (
    <section className="contact" id="contact">

      <div className="container contact-container">

        <div className="contact-info">

          <span className="section-badge">
            CONTACT US
          </span>

          <h2>Let's Build Something Amazing Together</h2>

          <p>
            Have a project in mind? Contact NorthPeak Digital today.
          </p>

          <div className="info-box">
            <FaMapMarkerAlt />
            <span>New York, USA</span>
          </div>

          <div className="info-box">
            <FaPhoneAlt />
            <span>+1 234 567 890</span>
          </div>

          <div className="info-box">
            <FaEnvelope />
            <span>info@northpeakdigital.com</span>
          </div>

        </div>

        <form onSubmit={handleSubmit} className="contact-form">
<label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
          id="name"
            value={form.name}
            onChange={handleChange}
          />

          {errors.name && <small>{errors.name}</small>}
<label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />

          {errors.email && <small>{errors.email}</small>}
<label htmlFor="phone">Enter phone number</label>
         <PhoneInput
  id="phone"
  international
  defaultCountry="IN"
  value={form.phone}
  onChange={(value) =>
    setForm({
      ...form,
      phone: value,
    })
  }
/>

          {errors.phone && <small>{errors.phone}</small>}
<label htmlFor="message">Your Message</label>
          <textarea
            rows="6"
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
          />

          {errors.message && <small>{errors.message}</small>}

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}
