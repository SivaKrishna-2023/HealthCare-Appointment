import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="w-full max-w-4xl mx-auto border p-6 rounded-lg shadow-lg flex justify-between items-center flex-col sm:flex-row bg-white">
      <div className="flex items-center space-x-6">
        <img
          src={doctor.profile}
          alt={doctor.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold">{doctor.name}</h2>
          <p className="text-gray-600 text-base">{doctor.specialization}</p>
          <p className={`mt-1 ${doctor.available ? "text-green-600" : "text-red-500"}`}>
            {doctor.available ? "Available" : "Unavailable"}
          </p>
        </div>
      </div>
      <Link
        to={`/doctor/${doctor._id}`}
        className="bg-blue-600 text-white px-6 py-2 rounded mt-4 sm:mt-0 hover:bg-blue-700 transition"
      >
        View
      </Link>
    </div>
  );
};

export default DoctorCard;
