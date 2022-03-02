import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
          {" "}
          Remember me{" "}
        </label>
      </div>

      <div class="text-sm">
        <Link to="/" class="forget font-medium ">
          {" "}
          Forgot your password?{" "}
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
