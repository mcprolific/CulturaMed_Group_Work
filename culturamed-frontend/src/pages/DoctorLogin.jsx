import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const DoctorLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Both email and password are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    alert("Doctor Logged In!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md flex flex-col gap-5"
        >
          <h2 className="text-2xl font-bold text-center text-blue-700">Doctor Login</h2>
          {error && <div className="text-red-600 font-semibold text-center">{error}</div>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-2 rounded-xl shadow-lg hover:from-blue-500 hover:to-blue-400 transition">
            Login
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorLogin;
