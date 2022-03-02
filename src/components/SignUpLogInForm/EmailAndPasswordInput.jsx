import React from "react";

const EmailAndPasswordInput = ({
  popup,
  email,
  password,
  setEmail,
  setPassword,
}) => {
  return (
    <div class="rounded-md shadow-sm -space-y-px">
      <div className="mb-2">
        <label for="email-address" class="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autocomplete="email"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Email address"
        />
      </div>
      <div className="mb-2">
        <label for="password" class="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autocomplete="current-password"
          required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default EmailAndPasswordInput;
