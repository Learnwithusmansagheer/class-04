import React, { useState } from 'react';
import './Login.css'; // Make sure to create and import a CSS file for styling

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic
    console.log('Form submitted', { emailOrPhone, password });
  };

  return (
    <div className="content">
      <div className="text">Login</div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            required
            type="text"
            className="input"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
          <span className="span">
            <svg
              className=""
              xmlSpace="preserve"
              style={{ enableBackground: 'new 0 0 512 512' }}
              viewBox="0 0 512 512"
              y="0"
              x="0"
              height="20"
              width="50"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  className=""
                  data-original="#000000"
                  fill="#595959"
                  d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"
                ></path>
              </g>
            </svg>
          </span>
          <label className="label">Email or Phone</label>
        </div>
        <div className="field">
          <input
            required
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="span">
            <svg
              className=""
              xmlSpace="preserve"
              style={{ enableBackground: 'new 0 0 512 512' }}
              viewBox="0 0 512 512"
              y="0"
              x="0"
              height="20"
              width="50"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  className=""
                  data-original="#000000"
                  fill="#595959"
                  d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0"
                ></path>
              </g>
            </svg>
          </span>
          <label className="label">Password</label>
        </div>
        <div className="forgot-pass">
          <a href="./">Forgot Password?</a>
        </div>
        <button className="button" type="submit">
          Sign in
        </button>
        <div className="sign-up">
          Not a member? <a href="#">signup now</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
