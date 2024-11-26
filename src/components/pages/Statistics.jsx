import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Statistics = () => {
  const pieData = {
    labels: ['Sales', 'Marketing', 'Development', 'Support'],
    datasets: [
      {
        data: [500, 200, 300, 100],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4caf50'],
        hoverBackgroundColor: ['#ff4b5c', '#2e93c8', '#ffb833', '#6ddc64']
      }
    ]
  };

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales (₱)',
        data: [2000, 2500, 3000, 3500, 4000, 4500],
        backgroundColor: '#4caf50',
        borderColor: '#388e3c',
        borderWidth: 1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      }
    },
    aspectRatio: 1,
  };

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-left w-full">
        <h1 className="text-xl font-medium">Statistics</h1>
        <p className="mt-4 text-gray-600">Overview of your business statistics for the recent months.</p>

        {/* Stat Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ------- Card 1: Total Sales ------- */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-800">Total Sales</h2>
            <p className="mt-2 text-3xl font-semibold text-green-600">₱21,500</p>
          </div>

          {/* ------- Card 2: Active Users ------- */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-800">Active Users</h2>
            <p className="mt-2 text-3xl font-semibold text-indigo-600">1,725</p>
          </div>

          {/* ------- Card 3: New Orders ------- */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-800">New Orders</h2>
            <p className="mt-2 text-3xl font-semibold text-yellow-600">350</p>
          </div>
        </div>

        {/* Charts */}
        <div className="mt-8 flex space-x-6">
          {/* Pie Chart */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-medium text-gray-800">Department Distribution</h2>
            <div className="h-72 w-full" style={{ maxWidth: '400px', maxHeight: '300px', width: '100%', height: '100%' }}>
              <Pie data={pieData} options={chartOptions} />
            </div>
          </div>

          {/* Bar Chart */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-medium text-gray-800">Monthly Sales</h2>
            <div className="h-72 w-full" style={{ maxWidth: '400px', maxHeight: '300px', width: '100%', height: '100%' }}>
              <Bar data={barData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Table with Recent Sales */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-medium text-gray-800">Recent Sales</h2>
          <table className="min-w-full mt-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Sale ID</th>
                <th className="py-2 px-4 border-b text-left">Customer</th>
                <th className="py-2 px-4 border-b text-left">Amount</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">#12351</td>
                <td className="py-2 px-4 border-b">Alice Green</td>
                <td className="py-2 px-4 border-b">₱1,250</td>
                <td className="py-2 px-4 border-b text-green-600">Completed</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">#12352</td>
                <td className="py-2 px-4 border-b">Bob Brown</td>
                <td className="py-2 px-4 border-b">₱850</td>
                <td className="py-2 px-4 border-b text-yellow-600">Pending</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">#12353</td>
                <td className="py-2 px-4 border-b">Charlie Davis</td>
                <td className="py-2 px-4 border-b">₱1,750</td>
                <td className="py-2 px-4 border-b text-red-600">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
