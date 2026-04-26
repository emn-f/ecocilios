import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DevicesMap from './pages/Map';
import DevicesList from './pages/Devices';
import About from './pages/About';
import Prototype from './pages/Prototype';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="mapa" element={<DevicesMap />} />
          <Route path="dispositivos" element={<DevicesList />} />
          <Route path="prototipo" element={<Prototype />} />
          <Route path="sobre" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
