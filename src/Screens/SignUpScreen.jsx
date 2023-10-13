import { useRef, useState } from "react";
import "../css/SignUpScreen.css";
import { Auth } from "../firebase.jsx";
import NetflixLogo from "../assets/Netflix-logo.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function SignUpScreen() {
  let potentialUser = useSelector((store) => store.user.potentialUser);

  let navigate = useNavigate();

  let emailRef = useRef();
  let passwordRef = useRef();

  async function register(e) {
    e.preventDefault();

    try {
      let email = emailRef.current.value;
      let password = passwordRef.current.value;
      await createUserWithEmailAndPassword(Auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  }

  async function SignIn(e) {
    e.preventDefault();

    try {
      let email = emailRef.current.value;
      let password = passwordRef.current.value;
      await signInWithEmailAndPassword(Auth, email, password);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="SignUpScreen">
      <div className="gradient" />
      <img
        src={NetflixLogo}
        alt="NetflixLogo"
        className="NetflixLogo"
        onClick={() => navigate("/")}
      />
      <div className="form-container">
        <form className="signUp-form">
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            defaultValue={`${potentialUser === null ? "" : potentialUser}`}
          />

          <input ref={passwordRef} placeholder="Password" type="password" />

          <button type="submit" onClick={SignIn}>
            Sign in
          </button>

          <h4>
            <span className="grey"> New to Netflix? </span>
            <span className="link" onClick={register}>
              Sign up Now
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default SignUpScreen;
