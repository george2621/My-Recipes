import React from "react";

const LoginSignupButton = ({ popup }) => {
  return (
    <div>
      <button
        type="submit"
        class="login-btn group relative w-full flex justify-center py-2 px-4 border border-transparent hover:opacity-90 text-sm font-medium text-white "
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        {popup === "Login" ? "Log in" : "Sign up"}
      </button>
    </div>
  );
};

export default LoginSignupButton;
