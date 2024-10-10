import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Drawer from './components/Drawer';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* The Navbar is placed outside of Routes, so it will always be visible */}
        <Navbar />

        {/* Main layout with Drawer and content */}
        <div style={{ display: 'flex' }}>
          {/* Drawer will always be visible as part of the layout */}
          <Drawer />

          {/* Main content area */}
          <div style={{ flexGrow: 1 }}>
            <Routes>
              {/* Define all routes here */}
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
