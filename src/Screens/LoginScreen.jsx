import React from "react";
import "../css/LoginScreen.css";
import { useNavigate } from "react-router-dom";
import netflix_logo from "../assets/images/logo.png";
import tv from "../assets/images/feature-1.png";
import fTwo from "../assets/images/feature-2.png";
import kids from "../assets/images/feature-4.png";
import Questions from "../LoginScreen/Questions";
import MembershipComponent from "../LoginScreen/MembershipComponent";
import Footer from "../LoginScreen/Footer";

function LoginScreen() {
  let navigate = useNavigate();

  return (
    <div className="loginScreen ">
      <img src={netflix_logo} alt="Netflix-logo" className="Netflix-logo" />

      <button className="sign-in" onClick={() => navigate("/signIn")}>
        Sign In
      </button>

      <div className="loginScreen-container">
        <div className="gradient" />
        <div className="loginScreen-container-inner-container">
          <h1>Unlimited movies,Tv shows and more.</h1>
          <h2>Watch anywhere. cancel any time </h2>
          <MembershipComponent />
        </div>
      </div>

      <section className="sectionTv">
        <div className="t">
          <div className="sectionTvText">
            <h1>Enjoy on your TV</h1>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
        </div>
        <div className="tt">
          <img src={tv} alt="tv" />
        </div>
      </section>

      <section className="sectionThree">
        <div className="img">
          <img src={fTwo} alt="w" />
        </div>

        <div className="sectionThreeText">
          <div className="">
            <h1>Download your shows to watch offline</h1>
            <p>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </section>

      <section className="sectionFour">
        <h1>Watch everywhere</h1>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </section>

      <section className="sectionFive">
        <div className="">
          <img src={kids} alt="kids" />
        </div>
        <div className="">
          <h1>Create profiles for kids</h1>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </section>

      <div className="sectionSix">
        <Questions />
        <MembershipComponent />
      </div>

      <Footer />
    </div>
  );
}

export default LoginScreen;
