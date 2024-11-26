import React from 'react';

const Billings = () => {
    const billings = [
        { id: '#1001', customer: 'Kaguya Shinomiya', amount: 500, status: 'Pending' },
        { id: '#1002', customer: 'Yuno Gasai', amount: 1200, status: 'Completed' },
        { id: '#1003', customer: 'Mai Sakurajima', amount: 750, status: 'Pending' },
        { id: '#1004', customer: 'Mikako Satsukitane', amount: 200, status: 'Completed' },
        { id: '#1005', customer: 'Saber (Artoria Pendragon)', amount: 950, status: 'Pending' },
      ];
      

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-left w-full">
        <h1 className="text-xl font-medium">Billings</h1>
        <p className="mt-4 text-gray-600">Manage billing records and track payments.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-800">Total Billings</h2>
            <p className="mt-2 text-3xl font-semibold text-indigo-600">₱5,600</p>
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-800">Pending Payments</h2>
            <p className="mt-2 text-3xl font-semibold text-yellow-600">₱2,000</p>
          </div>

       
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-800">Completed Payments</h2>
            <p className="mt-2 text-3xl font-semibold text-green-600">₱3,600</p>
          </div>
        </div>

      
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-800">Billing Records</h2>
          <table className="min-w-full mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Billing ID</th>
                <th className="py-2 px-4 border-b text-left">Customer</th>
                <th className="py-2 px-4 border-b text-left">Amount</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {billings.map((billing) => (
                <tr key={billing.id}>
                  <td className="py-2 px-4 border-b">{billing.id}</td>
                  <td className="py-2 px-4 border-b">{billing.customer}</td>
                  <td className="py-2 px-4 border-b">₱{billing.amount}</td>
                  <td className={`py-2 px-4 border-b ${billing.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {billing.status}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className={`px-4 py-2 rounded-lg text-white ${billing.status === 'Completed' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
                    >
                      {billing.status === 'Completed' ? 'Refund' : 'Mark as Paid'}
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

export default Billings;
