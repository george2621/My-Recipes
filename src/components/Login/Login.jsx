import React, { useState } from "react";
import LoginAndSignUpForm from "../SignUpLogInForm/LoginAndSignUpForm.jsx";
import { useAuth } from "../../context/AuthContext.js";
import { BsPersonCircle } from "react-icons/bs";

const Login = () => {
  const [popup, setPopup] = useState("");
  const { currentUser, logout } = useAuth();

  return !currentUser ? (
    <div className="login flex cursor-pointer	 text-sm px-5 py-3 leading-none  rounded text-white  mt-4 lg:mt-0">
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
    <div className="logout flex items-center cursor-pointer hover:text-fuchsia-900 text-sm px-5 py-2 leading-none  rounded text-white  mt-4 lg:mt-0">
      <BsPersonCircle style={{ fontSize: "25px", color: "#fff" }} />
      <p className="ml-2" onClick={logout}>
        Log out
      </p>
    </div>
  );
};

export default Login;
