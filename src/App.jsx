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
    clearError(name);
  };

  const clearError = (name) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "This field is required";
    if (!formData.lastName) formErrors.lastName = "This field is required";
    if (!formData.email)
      formErrors.email = "Please enter a valid email address";
    if (!formData.queryType)
      formErrors.queryType = "Please select a quarry type";
    if (!formData.message) formErrors.message = "This field is required";
    if (!formData.consent)
      formErrors.consent =
        "To submit this form, please consent to being contacted";
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
          <div className="input-group" id="name-group">
            <div className={`input-field ${errors.firstName ? "error" : ""}`}>
              <span>First Name </span> <span className="astrix">*</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="error-message">{errors.firstName}</p>
              )}
            </div>
            <div className={`input-field ${errors.lastName ? "error" : ""}`}>
              <span>Last Name </span> <span className="astrix">*</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="error-message">{errors.lastName}</p>
              )}
            </div>
          </div>
          <span>Email Address </span> <span className="astrix">*</span>
          <div className={`input-group ${errors.email ? "error" : ""}`}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error-message">{errors.email}</p>}
          <span>Query Type </span> <span className="astrix">*</span>
          <div
            className={`input-group ${errors.queryType ? "error" : ""}`}
            id="radio-group"
          >
            <label className="radio-queryType">
              <span id="value-1">
                {" "}
                <input
                  type="radio"
                  name="queryType"
                  value="general"
                  checked={formData.queryType === "general"}
                  onChange={handleChange}
                />
              </span>
              <span> General Enquiry</span>
            </label>
            <label className="radio-queryType">
              <span id="value-2">
                {" "}
                <input
                  type="radio"
                  name="queryType"
                  value="support"
                  checked={formData.queryType === "support"}
                  onChange={handleChange}
                />
              </span>
              <span> Support Request</span>
            </label>
          </div>
          {errors.queryType && (
            <p className="error-message">{errors.queryType}</p>
          )}{" "}
          <span>Message </span> <span className="astrix">*</span>
          <div className={`input-group ${errors.message ? "error" : ""}`}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {errors.message && <p className="error-message">{errors.message}</p>}
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
