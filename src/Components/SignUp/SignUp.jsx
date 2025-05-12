import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  return (
    <>
      <section className="signup">
        <div className="signup-container">
          <h1>Sign Up</h1>

          <div className="input-details flex">
            <input className="input-box" type="text" placeholder="Full Name" />
            <input className="input-box" type="email" placeholder="Email" />
          </div>

          <div className="checkBox-container flex">
            <span>
              <input className="input-checkBox" type="checkbox" />
            </span>
            I agree to Zomato's
            <Link to="#">Terms of Service, Privacy Policy</Link> and
            <Link to="#">Content Policies</Link>
          </div>

          <button>Create Account</button>

          <h3 className="Or-Text">Or</h3>

          <button className="google-button flex">
            <img
              className="GoogleLogo"
              src="Assets_2/GoogleLogo.png"
              alt="GoogleLogo"
            />
            Continue with Google
          </button>

          <p className="bottom-p-tag">
            Already have an account?
            <Link className="signup-bottom-login" to="#">
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
