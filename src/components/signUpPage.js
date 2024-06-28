import React from 'react';
import "./loginPage.css";

const SignUpForm = ({ switchToLogin }) => {
  return (
    <div id='container-login'>
      <h2 id='login_main_title'>Sign Up</h2>
      <form>
        <div>
          
          <input placeholder="Email" type="email" required />
        </div>
        <div>
          
          <input placeholder="Password" type="password" required />
        </div>
        <div>
          
          <input placeholder="Confirm password" type="password" required />
       
          <label class="container">I confirm that I am over 18.
  <input type="checkbox" />
  <span class="checkmark"></span>
</label>
        </div>
        
        <button className='button_login' type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <button className="button_link" onClick={switchToLogin}>Login</button></p>
    </div>
  );
};

export default SignUpForm;
