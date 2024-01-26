import { useState } from "react";
import TextField from "./TextField";
import { NavLink } from "react-router-dom";

export default function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSignIn = () => {
      // Your sign-in logic goes here
      console.log('Signing in with:', email, password);
    };
  
    return (
      <div className="bg-white h-full">
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <p>
        <NavLink className='text-blue-link' to="reset-password">Forgot password?</NavLink>
        </p>
        
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    );
}
