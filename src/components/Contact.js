import React, { useState } from "react";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    deviceType: "",
    service: [],
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "service") {
      const selectedOptions = Array.from(e.target.selectedOptions).map(
        (option) => option.value
      );
      setFormData({ ...formData, [name]: selectedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, location, deviceType, service, note } = formData;

    if (service.includes("Other") && note.trim() === "") {
      alert("Please provide additional information in the note section.");
      return;
    }

    const phoneNumber = "9613907054";

    const message = `*##New customer repair request##*\n\n*Name*: ${name}\n*Location*: ${location}\n*Device Type*: ${deviceType}\n*Service*: ${service.join(
      ", "
    )}\n*Note*: ${note}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappURL;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Book a Repair Service</h1>

      <label>Name | الإسم</label>
      <input
        required
        type="text"
        name="name"
        placeholder="enter your name"
        value={formData.name}
        onChange={handleChange}
      />

      <label>Address | مكان السكن</label>
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

      <label>Device Type | نوع الجهاز</label>
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
        <option value="Desktop">Desktop</option>
      </select>

      <label>Service(s) | نوع الخدمة</label>
      <select
        required
        name="service"
        value={formData.service}
        onChange={handleChange}
        multiple
        
      >
        <option value="" disabled>
          choose a service:
        </option>
        <option value="format/install windows">Format/Install Windows</option>
        <option value="Install/Buy App(s)">Install/Buy App(s)</option>
        <option value="Reset Windows Password">Reset Windows password</option>
        <option value="Fix a Problem">Fix a problem</option>
        <option value="Activate Windows">Activate Windows</option>
        <option value="Other">Other (mention it below..)</option>
      </select>

      <label>Note or extra info | ملاحظة أو معلومة إضافية</label>
      <textarea
        name="note"
        placeholder="type here"
        value={formData.note}
        onChange={handleChange}
        required={formData.service.includes("Other")}
      ></textarea>

      <button type="submit">Send | إرسال</button>
    </form>
  );
};

export default Contact;
