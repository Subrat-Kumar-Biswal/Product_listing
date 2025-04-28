import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

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
      navigate("/home");
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
        <h2 className="text-2xl font-bold text-center mb-6">Log In</h2>

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

        <div className="relative">
          <label className="block mb-2 text-sm">Password</label>
          <input
            type={showPassword ? "text" : "password"} // Toggle input type
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            className="absolute cursor-pointer right-3 top-9 text-gray-600"
            onClick={() => setShowPassword(!showPassword)} // Toggle visibility
          >
            {showPassword ? "🙈" : "👁️"} {/* Emoji for eye icon */}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition"
        >
          Log In
        </button>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default LoginForm;