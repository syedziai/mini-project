import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner"; // Import your LoadingSpinner component

const Login = () => {
  const [userName, setuserName] = useState();
  const [userPassword, setuserPassword] = useState();
  const [loginMessage, setLoginMessage] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const navigate = useNavigate();
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Set loading to true when starting the login process
    setLoading(true);

    axios
      .post("http://localhost:8080/login", { userName, userPassword })
      .then((result) => {
        const { data } = result;
        const { message, token } = data;
        if (message === "Login successful") {
          console.log(token);
          window.localStorage.setItem("loginToken", token);
          setLoginMessage("Login successful! Redirecting to the dashboard... ");

          // Delay the navigation to give time for the user to see the message
          setTimeout(() => {
            setLoading(false); // Set loading to false before navigating
            navigate("/dashboard");
          }, 3000);
        } else {
          setLoading(false); // Set loading to false if login fails
          setLoginMessage("Login failed. Please check your credentials.");
        }
      })
      .catch((error) => {
        setLoading(false); // Set loading to false if an error occurs
        if (error.response && error.response.status === 401) {
          // Handle 401 Unauthorized error
          setLoginMessage("Invalid username or password. Please try again.");
        } else {
          console.error(error);
          setLoginMessage("An error occurred during login. Please try again.");
        }
      });
  };
  return (
    <React.Fragment>
      {/* Loading Spinner Component */}
      {loading && <LoadingSpinner />}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 my-12 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLoginSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User Name
              </label>
              <div className="mt-2">
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setuserName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="userPassword"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setuserPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* Display login messages */}
          {loginMessage && (
            <div
              className={`mt-4 text-center text-sm ${
                !loginMessage.includes("successful")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {loginMessage}
            </div>
          )}

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
