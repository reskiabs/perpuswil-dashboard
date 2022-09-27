import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Setting from "./pages/Setting";
import Users from "./pages/Users";

import Dashboard from "./pages/Dashboard";
import DataPegawai from "./pages/DataPegawai";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/data-pegawai" element={<DataPegawai />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/users" element={<Users />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
