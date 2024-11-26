import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Statistics from './components/pages/Statistics';
import MainContent from './components/MainContent';
import Users from './components/pages/Users';
import Inventory from './components/pages/Inventory';
import Orders from './components/pages/Orders';
import Billings from './components/pages/Billings';
import Settings from './components/pages/Settings';
import Help from './components/pages/Help';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/Dashboard" element={<MainContent />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/users" element={<Users />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/billings" element={<Billings />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
  
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
