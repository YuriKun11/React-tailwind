import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false); 
  const [showStatusModal, setShowStatusModal] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null); 
  const [users, setUsers] = useState([
    { id: 1, name: 'Kaguya Shinomiya', email: 'kaguya.sama@gmail.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Yuno Gasai', email: 'gasai.yuno@gmail.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Saber (Artoria Pendragon)', email: 'saber.artoria@gmail.com', role: 'User', status: 'Active' },
    { id: 4, name: 'Mai Sakurajima', email: 'mai.sakurajima@gmail.com', role: 'Admin', status: 'Active' },
    { id: 5, name: 'Mikako Satsukitane', email: 'mikako.satsukitane@gmail.com', role: 'User', status: 'Inactive' },
  ]);
  

  const filteredUsers = users.filter((user) => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStatusChange = () => {
    if (selectedUser) {
      const updatedUsers = users.map(user => 
        user.id === selectedUser.id
          ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
          : user
      );
      setUsers(updatedUsers);
    }
    setShowStatusModal(false);
  };

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-left w-full">
        <h1 className="text-xl font-medium">Users</h1>
        <p className="mt-4 text-gray-600">Manage users, roles, and statuses.</p>
        <div className="mt-6 flex justify-between items-center space-x-4">
          <div className="flex items-center w-1/2 bg-white border rounded-lg shadow-sm">
            <Search className="ml-3 text-gray-500" />
            <input
              type="text"
              placeholder="Search Users"
              className="w-full px-4 py-2 border-none focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Add New User
          </button>
        </div>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-800">User List</h2>
          <table className="min-w-full mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">User ID</th>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-left">Role</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b">{user.id}</td>
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.role}</td>
                  <td className={`py-2 px-4 border-b ${user.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                    {user.status}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setShowStatusModal(true);
                      }}
                      className={`w-full px-4 py-2 rounded-lg text-white ${user.status === 'Active' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} transition duration-300`}
                    >
                      {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-medium mb-4">Add New User</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter user name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter user email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Role</label>
                <select className="w-full px-4 py-2 border rounded-md">
                  <option>Admin</option>
                  <option>User</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Save User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showStatusModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-medium mb-4">
              {selectedUser?.status === 'Active' ? 'Deactivate' : 'Activate'} User
            </h2>
            <p className="mb-4">Are you sure you want to {selectedUser?.status === 'Active' ? 'deactivate' : 'activate'} {selectedUser?.name}?</p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowStatusModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleStatusChange}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
