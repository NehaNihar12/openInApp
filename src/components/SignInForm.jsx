import { useState } from "react";
import TextField from "./TextField";
import { NavLink, useNavigate } from "react-router-dom";
import SignInBadge from "./SignInBadge";
import GoogleIcon from "assets/icons/GoogleIcon";
import AppleIcon from "assets/icons/AppleIcon";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    // Your sign-in logic goes here
    if (email && password) {
      console.log("Signing in with:", email, password);
      navigate("/home");
    }
  };

  return (
    <div className="flex md:mx-auto min-h-full flex-col justify-center content-start px-6 py-12 lg:px-8 bg-bgcolor-main">
      <div className=" md:w-full md:max-w-sm">
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign In
        </h2>
        <p>Sign in to your account</p>
      </div>

      <div className="mt-6 md:w-full md:max-w-sm">
        <div className="flex mb-5 justify-between">
          <SignInBadge>
            <GoogleIcon />
            <span>Sign in with google</span>
          </SignInBadge>
          <SignInBadge>
            <AppleIcon />
            <span>Sign in with apple</span>
          </SignInBadge>
        </div>
        <form className="space-y-6 py-6 px-4 rounded-[15px] bg-white-primary">
          <TextField
            label="Email address"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          >
            <div className="mt-2 text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </TextField>
          <div>
            <button
              type="submit"
              onClick={handleSignIn}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white-ghost shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-3 text-center text-sm text-gray-500">
          Don't have an account?
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            {" Register here"}
          </a>
        </p>
      </div>
    </div>
  );
}
