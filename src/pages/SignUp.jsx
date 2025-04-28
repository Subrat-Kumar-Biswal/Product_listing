import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    const isEmailTaken = existingUsers.some((user) => user.email === email);

    if (isEmailTaken) {
      return toast.success("Email is already registered!");
    }

    // Add the new user to the list
    const newUser = { email, password };
    existingUsers.push(newUser);

    // Save updated users list to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    toast.success("SignUp Successfully");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-120 bg-gray-100">
      <form
        onSubmit={submit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition"
        >
          Sign Up
        </button>
      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default SignUp;
