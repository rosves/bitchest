import React from "react";
import "./loginPage.scss";
import Logo from "../assets/images/bitchest_logo_mob.png";

const LoginForm = ({ switchToSignUp }) => {
  return (
    // container global
    <div id="main_container">
{/* container desk */}
      <div className="container-desk">
        {/* container du login */}
        <div id="container-login">
          <img className="logo" src={Logo} />
          <h2 id="login_main_title">Login</h2>

          <form>
            <div>
              <input placeholder="Username" type="name" required />
            </div>

            <div>
              <input placeholder="Password" type="password" required />
            </div>

            <button className="button_login" type="submit">
              Login
            </button>
          </form>

          <p>
            Don't have an account yet?{" "}
            <button className="button_link" onClick={switchToSignUp}>
              Get one !
            </button>
          </p>
        </div>
        {/* container desk - fin */}
        </div>
        {/* containner du login - fin */}
        {/* blue part */}
        <div className="blue_part _right">
          <img className="logo" src={Logo} />
          <h1>Welcome to BitChest !</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            turpis imperdiet odio egestas consectetur. Suspendisse felis enim,
            pretium in nisi sed, vulputate interdum neque. Ut pharetra libero
            odio. Integer blandit eleifend molestie. Curabitur commodo, nibh
            lobortis faucibus maximus, nibh arcu laoreet orci, euismod aliquam
            sem libero sit amet urna. Aliquam porta quam eget risus aliquet, in
            gravida lectus pharetra. 
          </p>
        </div>
        {/* blue part - fin */}
      

    </div>
    // container global - fin
  );
};

export default LoginForm;
