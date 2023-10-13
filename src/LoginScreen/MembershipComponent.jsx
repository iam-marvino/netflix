import React, { useRef } from "react";
import "../css/LoginScreen.css";
import arrowRight from "../assets/arrow-right.png";
import { useDispatch } from "react-redux";
import { SavePotentialUser } from "../redux/userSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

function MembershipComponent() {
  let dispatch = useDispatch();
  let inputRef = useRef();
  let navigate = useNavigate();

  function clicked(e) {
    e.preventDefault();
    dispatch(SavePotentialUser(inputRef.current.value));
    navigate("/signIn");
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="membershipComponent">
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          ref={inputRef}
          required
        />
        <button type="submit" onClick={clicked}>
          Get Started <img src={arrowRight} alt="arrowRight" />
        </button>
      </form>
    </div>
  );
}

export default MembershipComponent;
