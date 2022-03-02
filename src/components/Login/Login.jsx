import React, { useState } from "react";
import LoginAndSignUpForm from "../SignUpLogInForm/LoginAndSignUpForm.jsx";
import { useAuth } from "../../context/AuthContext.js";
import { BsPersonCircle } from "react-icons/bs";

const Login = () => {
  const [popup, setPopup] = useState("");
  const { currentUser, logout } = useAuth();

  return !currentUser ? (
    <div className="flex px-5 py-3 mt-4 text-sm leading-none text-white rounded cursor-pointer login lg:mt-0">
      <p className=" hover:text-fuchsia-900" onClick={() => setPopup("Signup")}>
        SIGN UP
      </p>
      /
      <p className=" hover:text-fuchsia-900" onClick={() => setPopup("Login")}>
        LOG IN
      </p>
      <LoginAndSignUpForm popup={popup} setPopup={setPopup} />
    </div>
  ) : (
    <div
      onClick={logout}
      className="flex items-center px-5 py-2 mt-4 text-sm leading-none text-white rounded cursor-pointer logout hover:opacity-80 lg:mt-0"
    >
      <BsPersonCircle style={{ fontSize: "25px", color: "#fff" }} />
      <p className="ml-2">Log out</p>
    </div>
  );
};

export default Login;
