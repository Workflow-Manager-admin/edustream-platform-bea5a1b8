import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// PUBLIC_INTERFACE
/**
 * Admin login page
 * On success (dummy), redirect to /dashboard.
 */
const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Dummy login handler (replace with real auth API in production)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email === "admin@example.com" && form.password === "admin123") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#ecfcfb] dark:from-secondary dark:to-[#225676]">
      <div className="w-full max-w-md bg-white dark:bg-[#21324d] rounded-lg shadow-lg px-8 py-10">
        <h2 className="text-2xl font-bold text-primary dark:text-white mb-6 text-center">
          Admin Login
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white dark:border-gray-700"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white dark:border-gray-700"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-accent font-bold transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
