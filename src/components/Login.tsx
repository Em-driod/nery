import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi"; // Import icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle login logic here,
    // e.g., send a request to your backend API for authentication.
    // For this example, we're just simulating the submission.
    console.log("Login attempt with:", { email, password });
    // You might want to add a loading state and error handling here.
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black w-screen px-4">
      <div className="bg-[#121212] p-8 rounded-lg shadow-lg w-96 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">LOGIN</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email or Phone"
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
            <Link to="/Product">
              LOGIN
            </Link>
          </button>
        </form>

        {/* Redirect to Register */}
        <p className="text-center text-gray-400 mt-4">
          Not a member?{" "}
          <Link to="/register" className="text-green-500 hover:underline">
            Signup now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;