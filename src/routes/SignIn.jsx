import React, { useState } from "react";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (err) {
      setError(err.message);
      alert(err.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign In</h1>

        {error ? <p className="bg-red-300 p-3 my-2">{error}</p> : null}

        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="relative my-2 w-full rounded-2xl shadow-2xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>

          <div className="my-4">
            <label>Password</label>
            <div className="relative my-2 w-full rounded-2xl shadow-2xl">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button className="w-full bg-button text-btnText my-2 p-3 rounded-2xl shadow-lg hover:shadow-2xl">
            Sign In
          </button>
        </form>
        <p className="my-4">
          Don't have an account?{" "}
          <Link className="text-accent" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
