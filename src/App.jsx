import { useEffect } from "react";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import { Auth } from "./firebase.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { login ,logout} from "./redux/userSlice";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  let user = useSelector((state) => state.user.currentUser);
  let dispatch = useDispatch();


  useEffect(() => {
    let unsubscribed = onAuthStateChanged(Auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribed;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="signIn" element={<SignUpScreen />} />
            <Route path="home" element={<HomeScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
          </Routes>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
