import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the entered credentials match any user
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Save logged-in user to localStorage
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ email: user.email })
      );
      toast.success("Login Successful!");
      navigate("/");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-50 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        <div>
          <label className="block mb-2 text-sm">Email Address</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition"
        >
          Sign In
        </button>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
