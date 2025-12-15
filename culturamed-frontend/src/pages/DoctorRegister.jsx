import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const DoctorRegister = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Doctor Registered!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md flex flex-col gap-5"
        >
          <h2 className="text-2xl font-bold text-center text-blue-700">Doctor Registration</h2>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="border p-3 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
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
            Register
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorRegister;
