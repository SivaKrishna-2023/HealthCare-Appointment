import { useState } from "react";
import { useParams } from "react-router-dom";

function BookAppointment() {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    dateTime: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, doctorId: id }),
    });

    const data = await res.json();
    if (data.success) {
      setMessage("Appointment booked successfully!");
      setForm({ name: "", email: "", dateTime: "" });
    } else {
      setMessage("Booking failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Book Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            name="dateTime"
            type="datetime-local"
            value={form.dateTime}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-black font-semibold py-3 rounded-md shadow-md transition"
          >
            Book Appointment
          </button>
        </form>
        {message && (
          <p className="mt-5 text-center text-sm text-blue-600 font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default BookAppointment;
