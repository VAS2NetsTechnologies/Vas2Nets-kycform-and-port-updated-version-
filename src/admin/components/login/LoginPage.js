import React, { useState } from "react";
import Logo from "../../../assets/VAS2Nets-Logo.png";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useLoginContext } from "../../context/loginContext";
import { customFetch } from "../../util/http";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setIsLoggedIn, setCustomSession } = useLoginContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("username", trimmedUsername);
      formData.append("password", trimmedPassword);

      const response = await customFetch.post("login/vaskyc", formData);

      const data = response.data;

      if (data.message === "Invalid Login details") {
        setError("Invalid login credentials. Please try again.");
      } else {
        setIsLoggedIn(true);

        const customSession = Date.now();
        localStorage.setItem("customSession", customSession.toString());

        setCustomSession(customSession);

        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-screen flex items-start">
        <div className="hidden relative w-1/2 h-screen px-10 md:flex">
          <div className="bg-coverImg w-full h-full  bg-no-repeat bg-cover bg-center"></div>
        </div>

        <div className="w-full h-full bg-slate-100/5 flex flex-col p-20 md:w-1/2">
          {/* logo */}
          <div className="px-8">
            <img
              src={Logo}
              alt="vfs logo"
              className="w-[300px] h-32 max-w-full max-h-full"
            />
          </div>

          <div className="w-full flex flex-col max-w-[500px]">
            <div className="w-full flex flex-col mb-10">
              <h3 className="text-3xl font-bold my-6 uppercase text-red-600">
                Kyc Portal
              </h3>
              <p className="text-xl tracking-wide mb-2 font-semibold capitalize">
                enter credentials
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="text"
              placeholder="username"
              className="w-full text-black my-4 py-4 px-2 bg-transparent border-b border-black outline-none focus:outline-none"
              onChange={(e) => setUsername(e.target.value)}
              onFocus={clearError}
            />

            <input
              type="password"
              placeholder="password"
              className="w-full text-black my-4 py-4 px-2 bg-transparent border-b border-black outline-none focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
              onFocus={clearError}
            />
          </div>

          {/* Display error message if there is an error */}
          {error && (
            <div className="text-red-500 font-semibold my-2">{error}</div>
          )}

          {/* submit btn */}
          <div className="w-full flex flex-col my-4">
            <motion.button
              whileHover={{ opacity: 0.8 }}
              whileTap={{ scale: 0.95 }}
              className="w-full text-white bg-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Log in"}
            </motion.button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
