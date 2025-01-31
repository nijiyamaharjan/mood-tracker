import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Entries';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';

import Dashboard from './pages/Dashboard'; // Example page components
import MoodLogs from './pages/MoodLogs/MoodLogs';
import CalendarMood from './pages/Calendar/Calendar';

export default function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <BrowserRouter>
        {/* The Navbar is placed outside of Routes, so it will always be visible */}
        <Navbar />

        {/* Main layout with Drawer and content */}
        <div style={{ display: 'flex', flexGrow: 1 }}>
          {/* Drawer will always be visible as part of the layout */}
          <Drawer />

          {/* Main content area */}
          <div style={{ flexGrow: 1, padding: '16px' }}>
            <Routes>
              {/* Define all routes here */}
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mood-logs" element={<MoodLogs />} />
              <Route path="/calendar" element={<CalendarMood />} />
              {/* <Route path="/settings" element={<Settings />} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
