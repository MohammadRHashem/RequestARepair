import React, { useState } from "react";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    deviceType: "",
    service: "",
    note: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, location, deviceType, service, note } = formData;

    // Replace the phone number with your WhatsApp number
    const phoneNumber = "9613907054";

    // Constructing the message
    const message = `*##New customer repair request##*\n\n*Name*: ${name}\n*Location*: ${location}\n*Device Type*: ${deviceType}\n*Service*: ${service}\n*Note*: ${note}`;

    // Creating the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Redirecting to WhatsApp
    window.location.href = whatsappURL;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Book a Repair Service</h1>

      <label>Name</label>
      <input
        required
        type="text"
        name="name"
        placeholder="enter your name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Where do you live?</label>
      <select
        required
        name="location"
        value={formData.location}
        onChange={handleChange}
      >
        <option value="" disabled>
          choose
        </option>
        <option value="Tyre">Tyre</option>
        <option value="Other">Other</option>
      </select>

      <label>Device Type</label>
      <select
        required
        name="deviceType"
        value={formData.deviceType}
        onChange={handleChange}
      >
        <option value="" disabled>
          choose your device type
        </option>
        <option value="Laptop">Laptop</option>
        <option value="Desktop">DesktopPC</option>
      </select>

      <label>Service</label>
      <select
        required
        name="service"
        value={formData.service}
        onChange={handleChange}
      >
        <option value="" disabled>
          choose a service:
        </option>
        <option value="format/install windows">Format/Install Windows</option>
        <option value="Install/Buy App(s)">Install/Buy App(s)</option>
        <option value="Reset Windows Password">Reset Windows password</option>
        <option value="Fix a Problem">Fix a problem</option>
        <option value="Activate Windows">Activate Windows</option>
        <option value="Other">Other (mention in the notes..)</option>
      </select>

      <label>Note</label>
      <textarea
        name="note"
        placeholder="Message"
        value={formData.note}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Send Request</button>
    </form>
  );
};

export default Contact;
