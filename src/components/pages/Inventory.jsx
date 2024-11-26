import React, { useState } from 'react';

const Inventory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics', price: '₱50,000', stock: 15, status: 'In Stock' },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: '₱20,000', stock: 25, status: 'In Stock' },
    { id: 3, name: 'Headphones', category: 'Accessories', price: '₱3,000', stock: 50, status: 'In Stock' },
    { id: 4, name: 'Desk Chair', category: 'Furniture', price: '₱5,000', stock: 10, status: 'Low Stock' },
    { id: 5, name: 'Monitor', category: 'Electronics', price: '₱8,000', stock: 0, status: 'Out of Stock' },
    { id: 6, name: 'Keyboard', category: 'Accessories', price: '₱2,000', stock: 30, status: 'In Stock' },
    { id: 7, name: 'Mouse', category: 'Accessories', price: '₱1,500', stock: 40, status: 'In Stock' },
    { id: 8, name: 'Desk Lamp', category: 'Furniture', price: '₱1,500', stock: 20, status: 'In Stock' },
  ]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-left w-full">
        <h1 className="text-xl font-medium">Inventory</h1>
        <p className="mt-4 text-gray-600">Manage your products, stock levels, and pricing.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium text-gray-800">{product.name}</h2>
              <p className="mt-2 text-gray-600">Category: {product.category}</p>
              <p className="mt-2 text-gray-600">Price: {product.price}</p>
              <p className="mt-2 text-gray-600">Stock: {product.stock}</p>
              <p className={`mt-2 text-sm font-semibold ${product.status === 'In Stock' ? 'text-green-600' : product.status === 'Low Stock' ? 'text-yellow-600' : 'text-red-600'}`}>
                Status: {product.status}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium text-gray-800">Inventory Details</h2>
            <button onClick={openModal} className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 flex items-center space-x-2">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14m7-7H5" />
              </svg>
              <span>Add New Product</span>
            </button>
          </div>
          <table className="min-w-full mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Product Name</th>
                <th className="py-2 px-4 border-b text-left">Category</th>
                <th className="py-2 px-4 border-b text-left">Price</th>
                <th className="py-2 px-4 border-b text-left">Stock</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4 border-b">{product.name}</td>
                  <td className="py-2 px-4 border-b">{product.category}</td>
                  <td className="py-2 px-4 border-b">{product.price}</td>
                  <td className="py-2 px-4 border-b">{product.stock}</td>
                  <td className={`py-2 px-4 border-b text-sm ${product.status === 'In Stock' ? 'text-green-600' : product.status === 'Low Stock' ? 'text-yellow-600' : 'text-red-600'}`}>
                    {product.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 transform transition-all duration-300 scale-100">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Add New Product</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Product Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter product name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Category</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter product category"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Price</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter product price"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">Stock</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter stock quantity"
                />
              </div>
              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
