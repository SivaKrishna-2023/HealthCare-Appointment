import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DoctorProfile from "./pages/DoctorProfile";
import BookAppointment from "./pages/BookAppointment";
import { DoctorProvider } from "./context/DoctorContext";

function App() {
  return (
    <DoctorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/book/:id" element={<BookAppointment />} />
        </Routes>
      </BrowserRouter>
    </DoctorProvider>
  );
}

export default App;
