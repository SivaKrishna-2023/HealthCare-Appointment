import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors")
      .then((res) => res.json())
      .then(setDoctors);
  }, []);

  if (!doctors.length)
    return <p className="text-center p-10 text-lg text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Doctor Profiles
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor._id}
              className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-xl"
            >
              <img
                src={doctor.profile}
                alt={doctor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-center text-gray-800">
                {doctor.name}
              </h2>
              <p className="text-center text-sm text-gray-600 mt-1">
                {doctor.specialization}
              </p>
              <p
                className={`text-center text-sm mt-2 font-medium ${
                  doctor.available ? "text-green-600" : "text-red-500"
                }`}
              >
                {doctor.available ? "Available" : "Not Available"}
              </p>
              <p className="text-center text-xs text-gray-500 mt-2">
                {doctor.details || "No details provided"}
              </p>
              <Link
                to={`/book/${doctor._id}`}
                className="block mt-6 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
              >
                Book Appointment
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorList;
