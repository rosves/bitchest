import React from "react";
import "./loginPage.scss";
import Logo from "../assets/images/bitchest_logo_mob.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = ({ switchToLogin }) => {
  return (
    <div id="container-login">
      <div
        className="header">
        {" "}
        <button className="button_link" onClick={switchToLogin}>
          <FontAwesomeIcon className="arrow_left" icon={faChevronLeft} />
        </button>
        <img className="logo logo_sign_up" src={Logo} />
      </div>
      <h2 id="login_main_title">Sign Up</h2>
      <form>
        <div>
          <input placeholder="Username" type="name" required />
        </div>
        <div>
          <input placeholder="Email" type="email" required />
        </div>
        <div>
          <input placeholder="Password" type="password" required />
        </div>
        <div>
          <input placeholder="Confirm password" type="password" required />

          <label class="checkbox_container">
            <input type="checkbox" /> <p className="age_testament">I confirm that I am over 18.</p>
            <span class="checkmark"></span>
          </label>
        </div>

        <button className="button_login" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
