import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
