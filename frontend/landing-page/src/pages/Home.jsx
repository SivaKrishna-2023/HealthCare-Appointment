import { useContext, useState } from "react";
import { DoctorContext } from "../context/DoctorContext";
import DoctorCard from "../components/DoctorCard";

function Home() {
  const { doctors } = useContext(DoctorContext);
  const [search, setSearch] = useState("");

  const filtered = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Doctors</h1>
      
      <input
        type="text"
        placeholder="Search doctors..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mx-auto block p-2 border mb-8 rounded"
      />

      {/* Row-wise layout with wrapping */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filtered.length > 0 ? (
          filtered.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))
        ) : (
          <p className="text-gray-500">No doctors found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
