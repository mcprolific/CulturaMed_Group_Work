import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DoctorLogin } from "./pages/DoctorLogin";
import { DoctorRegister } from "./pages/DoctorRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/doctor-register" element={<DoctorRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
