// LoginError.jsx
import React from "react";
import { Link } from "react-router-dom";

const LoginError = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4 text-red-500">Error</h2>
      <p className="text-gray-700 mb-8">
        An error occurred during the login process.
      </p>
      <Link
        to="/login"
        className="text-indigo-600 hover:text-indigo-500 font-semibold"
      >
        Go back to login
      </Link>
    </div>
  );
};

export default LoginError;
