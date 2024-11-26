import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`flex-1 p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} min-h-screen`}>
      <div className="container mx-auto text-left w-full">
        <h1 className={`text-xl font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Settings</h1>
        <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Manage your preferences and account settings.</p>

        <div className={`mt-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-md`}>
          <h2 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Account Settings</h2>
          <div className="mt-4">
            <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Username</label>
            <input
              type="text"
              placeholder="Enter new username"
              className={`mt-2 p-3 w-full rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
          <div className="mt-4">
            <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Email</label>
            <input
              type="email"
              placeholder="Enter new email"
              className={`mt-2 p-3 w-full rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
          <div className="mt-4">
            <label className={`block ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className={`mt-2 p-3 w-full rounded-lg border ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
        </div>

        <div className={`mt-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-md`}>
          <h2 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Notification Settings</h2>
          <div className="mt-4 flex items-center justify-between">
            <span className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}>Email Notifications</span>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="toggle-checkbox"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}>SMS Notifications</span>
            <input
              type="checkbox"
              checked={smsNotifications}
              onChange={() => setSmsNotifications(!smsNotifications)}
              className="toggle-checkbox"
            />
          </div>
        </div>

        <div className={`mt-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-md`}>
          <h2 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Privacy Settings</h2>
          <div className="mt-4 flex items-center justify-between">
            <span className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}>Profile Visibility</span>
            <select className={`p-2 border ${darkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}>Activity Status</span>
            <input
              type="checkbox"
              checked={true}
              className="toggle-checkbox"
            />
          </div>
        </div>

        <div className={`mt-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-md`}>
          <h2 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>Theme Settings</h2>
          <div className="mt-4 flex items-center justify-between">
            <span className={`text-gray-600 ${darkMode ? 'text-gray-300' : ''}`}>Dark Mode</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="toggle-checkbox"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
