import { useState } from "react";
import useAuthStore from "../store/authStore";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi"; // Import icons

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = useAuthStore((state) => state.register);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(name, email, password);
  };

  return (
    <div className="flex items-center w-screen justify-center min-h-screen bg-black px-4 ">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-white">
        <h2 className="text-2xl font-bold text-center mb-6">REGISTER</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 text-white rounded-md border border-gray-700 focus:border-green-500 focus:ring focus:ring-green-500/40 outline-none transition"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-gray-900 text-white rounded-md border border-gray-700 focus:border-green-500 focus:ring focus:ring-green-500/40 outline-none transition"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-gray-900 text-white rounded-md border border-gray-700 focus:border-green-500 focus:ring focus:ring-green-500/40 outline-none transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-md transition"
          >
            REGISTER
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 hover:underline">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
