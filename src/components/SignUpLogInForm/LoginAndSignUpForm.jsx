import React, { useState } from "react";
import LoginSignupHeader from "./LoginSignupHeader";
import EmailAndPasswordInput from "./EmailAndPasswordInput";
import ForgetPassword from "./ForgetPassword";
import LoginSignupButton from "./LoginSignupButton";
import CloseFormButton from "./CloseFormButton";
import { useAuth } from "../../context/AuthContext.js";

const LoginForm = ({ popup, setPopup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const { signup, login } = useAuth();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setMessage("Password should be more than 6 letters");
    } else {
      try {
        await signup(email, password);
        setEmail("");
        setPassword("");
        setMessage("Sign up successfully");
      } catch (error) {
        setMessage(error.message);
      }
    }
  };

  const handleLogInSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      setPopup("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    popup.length > 0 && (
      <div className="popup">
        <div class="popup-inner  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div class="max-w-md w-full space-y-8">
            <LoginSignupHeader popup={popup} />
            {/* {currentUser && <p className="text-red-600">{currentUser.email}</p>} */}
            <form
              class="mt-8 space-y-6"
              onSubmit={
                popup === "Signup" ? handleSignUpSubmit : handleLogInSubmit
              }
            >
              <input type="hidden" name="remember" value="true" />
              <EmailAndPasswordInput
                email={email}
                password={password}
                setPassword={setPassword}
                setEmail={setEmail}
                popup={popup}
              />
              {popup === "Login" && <ForgetPassword />}
              {message && (
                <p
                  className={
                    message === "Sign up successfully"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {message}
                </p>
              )}

              <LoginSignupButton popup={popup} />
              <CloseFormButton setPopup={setPopup} setMessage={setMessage} />
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginForm;
