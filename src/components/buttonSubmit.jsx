import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "This field is required *";
    if (!formData.lastName) formErrors.lastName = "This field is required *";
    if (!formData.email) formErrors.email = "This field is required *";
    if (!formData.queryType) formErrors.queryType = "This field is required *";
    if (!formData.message) formErrors.message = "This field is required *";
    if (!formData.consent) formErrors.consent = "This field is required *";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      alert("Your message has been sent, we will contact you soon");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
      });
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group name-group">
            <div className={`input-field ${errors.firstName ? "error" : ""}`}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="error-message">{errors.firstName}</p>
              )}
            </div>
            <div className={`input-field ${errors.lastName ? "error" : ""}`}>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="error-message">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className={`input-group ${errors.email ? "error" : ""}`}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className={`input-group ${errors.queryType ? "error" : ""}`}>
            <label>
              <input
                type="radio"
                name="queryType"
                value="general"
                checked={formData.queryType === "general"}
                onChange={handleChange}
              />
              General
            </label>
            <label>
              <input
                type="radio"
                name="queryType"
                value="support"
                checked={formData.queryType === "support"}
                onChange={handleChange}
              />
              Support
            </label>
            {errors.queryType && (
              <p className="error-message">{errors.queryType}</p>
            )}
          </div>
          <div className={`input-group ${errors.message ? "error" : ""}`}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
          </div>
          <div className={`consent-group ${errors.consent ? "error" : ""}`}>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <label>I consent to be contacted</label>
            {errors.consent && (
              <p className="error-message">{errors.consent}</p>
            )}
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
