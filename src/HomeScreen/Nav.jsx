import React from "react";
import "../css/HomeScreen.css";
import NetflixLogo from "../assets/Netflix-logo.png";
import NetflixAvater from "../assets/Netflix-avatar.png";
import { useNavigate } from "react-router-dom";

function Nav() {
  let [switchColor, setSwitchColor] = React.useState(false);

  let navigate = useNavigate();

  function transitionNavbar() {
    if (window.scrollY > 100) {
      setSwitchColor(true);
    } else {
      setSwitchColor(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${switchColor === true && "nav-black"} `}>
      <div className="nav-container">
        <img
          src={NetflixLogo}
          alt="netflix logo"
          className="nav-logo"
          onClick={() => navigate("/home")}
        />

        <img
          src={NetflixAvater}
          alt="netflix avatar"
          className="nav-avater"
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
}

export default Nav;
