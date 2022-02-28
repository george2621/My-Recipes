import React from "react";

const LoginSignupHeader = ({ popup }) => {
  return (
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {popup === "Login" ? "Log in to your account" : "Sign up with email"}
      </h2>
    </div>
  );
};

export default LoginSignupHeader;
