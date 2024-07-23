import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* -- Card Container -- */}
      <div className="card">
        {/* -- Header -- */}
        <h1>Contact Us</h1>

        {/* -- Form linked to Button -- */}
        <form id="contact-form">
          {/* -- Name Inputs -- */}
          <div className="row">
            <div className="column">
              <span className="label">First Name </span>
              <span className="astrix">*</span>
              <div className="input-group">
                <input type="text" id="first-name"></input>
              </div>
              <div>
                <p className="error-message"></p>
              </div>
            </div>
            <div className="column">
              <span className="label">Last Name </span>
              <span className="astrix">*</span>
              <div className="input-group">
                <input type="text" id="last-name"></input>
              </div>
              <div>
                <p className="error-message"></p>
              </div>
            </div>
          </div>
          <br></br>

          {/* -- Email Input -- */}
          <span className="label">Email Address </span>
          <span className="astrix">*</span>

          <div className="input-group">
            <input type="email" id="email"></input>
          </div>
          <p className="error-message"></p>
          <br></br>

          {/* -- Radio Button Inputs -- */}
          <span className="label">Query Type </span>
          <span className="astrix">*</span>

          <div className="row">
            <div className="column">
              <div className="input-group">
                <label className="radio-container">
                  <input
                    type="radio"
                    name="message-type"
                    value="option1"
                  ></input>
                  <span className="checkmark">General Enquiry </span>
                </label>
              </div>
            </div>

            <div className="column">
              <div className="input-group">
                <label className="radio-container">
                  <input
                    type="radio"
                    name="message-type"
                    value="option2"
                  ></input>
                  <span className="checkmark">Support Request </span>
                </label>
              </div>
            </div>
          </div>
          <p className="error-message"></p>
          <br></br>

          {/* -- Message Box Input -- */}
          <span className="label">Message </span>
          <span className="astrix">*</span>

          <div className="input-group">
            <textarea id="messageBox"></textarea>
          </div>
          <p className="error-message"></p>
          <br></br>

          {/* -- Consent Checkbox Input -- */}
          <div className="consent-group">
            <input type="checkbox" id="consent"></input>
            <label for="consent">
              I consent to being contacted by the team
            </label>
            <p className="error-message"></p>
            <br></br>
          </div>

          {/* -- Submit Button -- */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
