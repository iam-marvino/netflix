import Nav from "../HomeScreen/Nav";
import "../css/ProfileScreen.css";
import avatar from "../assets/Netflix-avatar.png";
import { Auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function ProfileScreen() {
  let navigate = useNavigate();
  let currentUser = useSelector((store) => store.user.currentUser);

  useEffect(() => {
    if (currentUser === null) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  async function logOut() {
    try {
      await signOut(Auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="profileScreen">
      <Nav />
      <div className="body">
        <h1 id="Hone">Edit Profile</h1>

        <div className="info">
          <img src={avatar} alt="avatar" className="avatar" />

          <div className="details">
            <h2>{Auth?.currentUser?.email}</h2>

            <div className="plans">
              <h3>Plans</h3>

              <br />
              <br />
              <br />

              <p>
                Plan Types & Monthly subscription payment with stripe to be
                added SOON...{" "}
              </p>

              <br />

              <button onClick={logOut} className="SignOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
