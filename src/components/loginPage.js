import React from 'react';
import "./loginPage.css";

const LoginForm = ({ switchToSignUp }) => {
  return (
    <div id='container-login'>
      <img src=''/>
      <h2 id='login_main_title'>Login</h2>
      <form>
        <div>
         
          <input placeholder="Email" type="email" required />
        </div>
        <div>
          
          <input placeholder="Password" type="password" required />
        </div>
        <button className='button_login' type="submit">Login</button>
      </form>
      <p>Don't have an account yet? <button className="button_link" onClick={switchToSignUp}>Get one !</button></p>
    </div>
  );
};

export default LoginForm;
