import React from 'react';

const Orders = () => {
    const orders = [
        { id: '#12345', customer: 'Kaguya Shinomiya', amount: 230, status: 'Completed' },
        { id: '#12346', customer: 'Yuno Gasai', amount: 125, status: 'Pending' },
        { id: '#12347', customer: 'Mai Sakurajima', amount: 89, status: 'Cancelled' },
        { id: '#12348', customer: 'Mikako Satsukitane', amount: 345, status: 'Pending' },
        { id: '#12349', customer: 'Saber (Artoria Pendragon)', amount: 400, status: 'Completed' },
      ];
      

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-left w-full">
        <h1 className="text-xl font-medium">Orders</h1>
        <p className="mt-4 text-gray-600">Manage customer orders and their statuses.</p>

        <div className="mt-6 flex justify-end">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
            Add New Order
          </button>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-800">Order List</h2>
          <table className="min-w-full mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Order ID</th>
                <th className="py-2 px-4 border-b text-left">Customer</th>
                <th className="py-2 px-4 border-b text-left">Amount</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="py-2 px-4 border-b">{order.id}</td>
                  <td className="py-2 px-4 border-b">{order.customer}</td>
                  <td className="py-2 px-4 border-b">₱{order.amount}</td>
                  <td className={`py-2 px-4 border-b ${order.status === 'Completed' ? 'text-green-600' : order.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'}`}>
                    {order.status}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className={`px-4 py-2 rounded-lg text-white ${order.status === 'Completed' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
                    >
                      {order.status === 'Completed' ? 'Cancel' : 'Mark as Completed'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
