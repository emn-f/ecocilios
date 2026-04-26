import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DevicesMap from './pages/Map';
import DevicesList from './pages/Devices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="mapa" element={<DevicesMap />} />
          <Route path="dispositivos" element={<DevicesList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
